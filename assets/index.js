import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/Autoplay.js'

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playButton = document.querySelector("button[id=playButton]");
playButton.onclick = () => player.togglePlay();

const soundButton = document.querySelector("button[id=soundButton]");
soundButton.onclick = () => player.toggleSound();