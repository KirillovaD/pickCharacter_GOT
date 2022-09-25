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

