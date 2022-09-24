//модальное окно с инфой

const info = document.querySelector(".img__question");
const modalBg = document.querySelectorAll('.modal__bg');//nodelist всех модальных окон

info.addEventListener("click", openModalInfo);
export function openModalInfo(){
    modalBg[0].classList.add("modal__bg_active");
}

info.addEventListener("mouseout",closeModalInfo);

export function closeModalInfo(){
    modalBg[0].classList.remove("modal__bg_active");
}


// // модальное окно вопросы
const modalBtn = document.querySelector(".modal__btn");
const modalCloseBtn = document.querySelector(".modal__close");


modalBtn.addEventListener("click", openModal);
export function openModal(){
    modalBg[1].classList.add("modal__bg_active");
}

modalCloseBtn.addEventListener("click", closeModal);
export function closeModal(){
  modalBg[1].classList.remove("modal__bg_active");
}


