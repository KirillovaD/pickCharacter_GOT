//прокрутка вопросов 
const modalNode = document.querySelectorAll(".modalQuestions");
const nextBtn = document.querySelector(".modal__next");
const prevBtn = document.querySelector(".modal__prev");

nextBtn.addEventListener("click", openNext);
prevBtn.addEventListener("click", openPrev);

let current = 0;

export function openNext(){
  
  if (current +1 == modalNode.length){
    return;
  } else {
    current ++;
  }
  for (let i = 0; i < modalNode.length; i++){
    modalNode[i].classList.remove("modalQuestions_active");
  }
  modalNode[current].classList.add("modalQuestions_active");
  
}

export function openPrev(){
  
  if (current - 1 == -1){
    return;
  } else {
    current --;
  }

  for (let i = 0; i < modalNode.length; i++){
    modalNode[i].classList.remove("modalQuestions_active");
  }
  modalNode[current].classList.add("modalQuestions_active");
 


}