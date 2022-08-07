var musicas = [
    {titulo:'Life Goes On', artista: 'BTS', src:'music/Life_Goes_On.mp3', img:'img/be.jpeg'},
    {titulo:'Cruel', artista:'Jackson', src:'music/Jackson_Wang-Cruel.mp3', img:'img/jackson.jpeg'},
    {titulo:'Left and Right', artista:'JungKook by Charlie Puth', src:'music/Left_And_Right.mp3', img:'img/jk.jpeg'},
    {titulo:'Stay Alive', artista:'Jungkook by Prod. Suga', src:'music/Stay_Alive.mp3',img:'img/stay.jpeg'}

];

var musica = document.querySelector('audio');
var indexMusica= 0;

var duracaoMusica = document.querySelector('.fim');
var imagem = document.querySelector('img');
var nomeMusica =document.querySelector('.descricao h2');
var nomeArtista = document.querySelector('.descricao i');


renderizarMusica(indexMusica);


// eventos do script

document.querySelector('span.material-icons.botao-play').addEventListener('click', tocarMusica);
document.querySelector('span.material-icons.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('span.material-icons.setas.anterior').addEventListener('click', () => { 
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 3;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('span.material-icons.setas.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 3){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});


// funçoes 
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata',() => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        musica.play()
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });
                
}

            function tocarMusica(){
                musica.play();
                document.querySelector('span.material-icons.botao-pause').style.display = 'block';
                document.querySelector('span.material-icons.botao-play').style.display = 'none';
                 
            }

            function pausarMusica(){
                musica.pause();
                document.querySelector('span.material-icons.botao-play').style.display = 'block';
                document.querySelector('span.material-icons.botao-pause').style.display = 'none';
            }



            function atualizarBarra(){

                var barra = document.querySelector('progress');
                barra.style.width = Math.floor(( musica.currentTime / musica.duration) * 100) + '%';
                var tempoDecorrido = document.querySelector('.inicio');
                tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
            }

            function segundosParaMinutos(segundos){
                var campoMinutos = Math.floor(segundos/60);
                var campoSegundos = segundos % 60;
                if (campoSegundos<10){
                    campoSegundos= '0'+campoSegundos;
                }
                return campoMinutos +':'+campoSegundos;
            }

            



