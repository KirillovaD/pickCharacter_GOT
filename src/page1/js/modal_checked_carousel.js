let inputs = document.getElementsByTagName("input");
const modalNode = document.querySelectorAll(".modalQuestions");


for (let input in inputs){
  input.addEventListner("change", onCheckNext);
} 
function onCheckNext(){
  for (let input in inputs){
    if(input.checked){
      for (let i = 0; i < modalNode.length; i++){
        modalNode[i].classList.add("modalQuestions_hidden");
      }
      modalNode[current].classList.remove("modalQuestions_hidden");
    } 
  }
}
  

