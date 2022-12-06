var audioPlayer = document.getElementById("audioPlayer");

var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var passarBtn = document.getElementById("passarBtn");
var voltarBtn = document.getElementById("voltarBtn");

var barra = document.getElementById("player-control-progres2");
var tempoTotal = document.getElementById("player-control-timeTotal");
var tempoMusic = document.getElementById("player-control-timeMusic");


var loaded = false;

function atualizarBarra() {
  barra.style.width =
    Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + "%";

    let dataAtual = new Date(null);
    dataAtual.setMinutes(audioPlayer.currentTime)
    let tempoReal = dataAtual.toISOString().substr(12, 8);
    tempoMusic.innerText = tempoReal
}

pauseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  playBtn.style.display = "inline";
  pauseBtn.style.display = "none";
  audioPlayer.pause();

  return false;
});

playBtn.addEventListener("click", (e) => {
  e.preventDefault();

  playBtn.style.display = "none";
  pauseBtn.style.display = "inline";
  audioPlayer.play();

  return false;
});

var itens = [];
var lista = document.querySelectorAll(".music");
itens = lista;




function tocarMusic(e) {
  var idMusic = e.target.id;
  

  switch (idMusic) {
    case "music1":
      playMusic(0);

      

      passarBtn.addEventListener("click", () => {
        playMusic(1)
      });

      break;

    case "music2":
      playMusic(1);

      voltarBtn.addEventListener("click", () => {
        playMusic(0);
      });

      passarBtn.addEventListener("click", () => {
        playMusic(2);
      });

      break;
    case "music3":
      playMusic(2);

      voltarBtn.addEventListener("click", () => {
        playMusic(1);
      });

      passarBtn.addEventListener("click", () => {
        playMusic(3);
      });

      break;
    case "music4":
      playMusic(3);

      voltarBtn.addEventListener("click", () => {
        playMusic(2);
      });

      passarBtn.addEventListener("click", () => {
        playMusic(4);
      });

      break;
    case "music5":
      playMusic(4);

      voltarBtn.addEventListener("click", () => {
        playMusic(3);
      });

      passarBtn.addEventListener("click", () => {
        playMusic(5);
      });
      break;

    case "music6":
      playMusic(5);

      voltarBtn.addEventListener("click", () => {
        playMusic(4);
      });

      passarBtn.addEventListener("click", () => {
        playMusic(6);
      });

      break;
    case "music7":
      playMusic(6);

      voltarBtn.addEventListener("click", () => {
        playMusic(5);
      });

      passarBtn.addEventListener("click", () => {
        playMusic(7);
      });
      break;

    case "music8":
      playMusic(7);

      voltarBtn.addEventListener("click", () => {
        playMusic(6);
      });
      

      passarBtn.addEventListener("click", () => {
        playMusic(8);
      });
      break;

    case "music9":
      playMusic(8);

      voltarBtn.addEventListener("click", () => {
        playMusic(7);
      });

      passarBtn.addEventListener("click", () => {
        playMusic(8);
      });
      break;
  }
}

function playMusic(index) {
  audioPlayer.load();
  image = lista[index].getAttribute("data-image");
  artist = lista[index].getAttribute("data-artist");
  song = lista[index].getAttribute("data-song");
  file = lista[index].getAttribute("data-file");

  playerArtistComponent = document.getElementsByClassName("player-artist");

  playerArtistComponent[0].innerHTML =
    `
    <img src="` +
    image +
    `" />
    <h3>` +
    artist +
    `  <br/> <span>` +
    song +
    `</span> </h3>`;

  audioPlayer.innerHTML = `<source src="` + file + `"  type"audio/mp3" />`;
  audioPlayer.play();

  playBtn.style.display = "none";
  pauseBtn.style.display = "inline";
}

audioPlayer.onloadeddata = function durationMusic() {

  let dataAtual = new Date(null);
  dataAtual.setMinutes(audioPlayer.duration)
  let tempoCompleto = dataAtual.toISOString().substr(12, 8);
  tempoTotal.innerText = tempoCompleto
}

audioPlayer.addEventListener("timeupdate", atualizarBarra);


document.getElementById("musics").addEventListener("click", tocarMusic);
