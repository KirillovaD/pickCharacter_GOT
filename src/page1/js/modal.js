const modalBtn = document.querySelector(".modal__btn");
const modalBg = document.querySelector(".modal__bg");
const modalClose = document.querySelector(".modal__close");
const modalPrev = document.querySelector(".modal__prev");
const modalNext = document.querySelector(".modal__next");

modalBtn.addEventListener("click", openModal());

 function openModal(){
  modalBg.classList.add("modal__bg_active");

 }

modalClose.addEventListener("click", function(){
  modalBg.classList.remove("modal__bg_active");

})
//  export default openModal