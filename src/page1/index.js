console.log('Hello')

let radio = new Audio();
radio.src = "assets/audio.mp3";

document.querySelector('#on').onclick = function() {
    radio.play()
}
document.querySelector('#off').onclick = function() {
    radio.pause()
}

