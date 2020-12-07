import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/Autoplay.js'

const video = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video,
    plugins: [
        // new AutoPlay()
    ],
});

const playButton = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const soundButton = document.querySelector("#soundButton");
soundButton.onclick = () => player.toggleSound();