
// // модальное окно вопросы
const modalBtn = document.querySelector(".modal__btn");
const modalBg = document.querySelectorAll('.modal__bg');
const modalCloseBtn = document.querySelector(".modal__close");

modalBtn.addEventListener("click", openModal);
export function openModal(){
    modalBg[1].classList.add("modal__bg_active");
}

modalCloseBtn.addEventListener("click", closeModal);
export function closeModal(){
  modalBg[1].classList.remove("modal__bg_active");
}

