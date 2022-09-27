//прокрутка вопросов 
const modalNode = document.querySelectorAll(".modalQuestions");
const inputs = document.querySelectorAll("input"); //*для прокрутки по :checked

const nextBtn = document.querySelector(".modal__next");
const prevBtn = document.querySelector(".modal__prev");

nextBtn.addEventListener("click", openNext);
prevBtn.addEventListener("click", openPrev);

let i //*
for (i = 0; i < inputs.length; i++ ){
    inputs[i].addEventListener("click", openNext);

} 

let current = 0;

export function openNext(){
  
  if (current +1 == modalNode.length){
    const inputsModul3 = document.querySelector('input[name="religion"]:checked'); //*
    if (inputsModul3){ //*
      // calc.setAttribute("special","1");
      calc.classList.add("calc_pseudoHover")
  } else {
      return
  }
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