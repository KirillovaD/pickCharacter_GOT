// import {openModal} from "./js/modal";


let radio = new Audio();
radio.src = "assets/audio.mp3";

document.querySelector('#on').onclick = function() {
    radio.play()
}
document.querySelector('#off').onclick = function() {
    radio.pause()
}

//модальное окно пока тут
const modalBtn = document.querySelector(".modal__btn");
const modalBg = document.querySelector(".modal__bg");
const modalClose = document.querySelector(".modal__close");

modalBtn.addEventListener("click", function(){
    modalBg.classList.add("modal__bg_active");

});

modalClose.addEventListener("click", function(){
  modalBg.classList.remove("modal__bg_active");

})