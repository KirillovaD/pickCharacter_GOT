import {openModalInfo,closeModalInfo} from './js/modalInfo.js'; 
import {openModal, closeModal} from './js/modal.js'; 
import {openNext, openPrev} from './js/modal_carousel.js'; 


let radio = new Audio();
    radio.src = "assets/audio.mp3";


document.querySelector('#on').onclick = function() {
    radio.play()
}

document.querySelector('#off').onclick = function() {
    
    radio.pause()
};







//Функция берет результат из формы и определяет персонажа
let calc = document.getElementById("calc");

calc.addEventListener("click", () => {

let stark = 0;
let baratheon = 0;
let lanister = 0;
let targarian = 0;
let tully = 0;
let tyrell = 0;
let greyjoy = 0;

let moneyInput = parseInt(document.querySelector('input[name="money"]:checked').value);
let familyInput = parseInt(document.querySelector('input[name="family"]:checked').value);
let religionInput = parseInt(document.querySelector('input[name="religion"]:checked').value);

console.log(moneyInput);
console.log(familyInput);
console.log(religionInput);


// Подсчет баллов
if (moneyInput === 1) {
    stark += 1;
    greyjoy += 1;
} else if (moneyInput === 2) {
    baratheon += 1;
    lanister += 1;
} else if (moneyInput === 3) {
    lanister += 1;
    tyrell += 1;
} else if (moneyInput === 4) {
    targarian += 1;
    tully += 1;
    stark += 1;
}

if (familyInput === 1) {
    lanister += 1;
    targarian +=1;
} else if (familyInput === 2) {
    stark += 1;
} else if (familyInput === 3) {
    baratheon += 1;
    tully += 1;
    tyrell += 1;
} else if (familyInput === 4) {
    greyjoy += 1;
    lanister += 1;
}

if (religionInput === 1) {
    targarian += 1;
    baratheon += 1;
} else if (religionInput === 2) {
    stark += 1;
    tully += 1;
} else if (religionInput === 3) {
    lanister += 1;
    tyrell += 1;
} else if (religionInput === 4) {
    tyrell += 1;
    greyjoy += 1;
lanister += 1;
}

// Выбор персонажа
let id;
if (stark >= baratheon && stark >= lanister &&
    stark >= targarian && stark >= tully &&
    stark >= tyrell && stark >= greyjoy) {
    localStorage.setItem("got", "Старк");

    window.location.href = '../page2/index.html';

} else if (lanister >= baratheon && lanister >= stark &&
    lanister >= targarian && lanister >= tully &&
    lanister >= tyrell && lanister >= greyjoy) {
    localStorage.setItem("got", "Ланистер");

    window.location.href = '../page2/index.html';

} else if (targarian >= baratheon && targarian >= stark &&
    targarian >= lanister && targarian >= tully &&
    targarian >= tyrell && targarian >= greyjoy) {
    localStorage.setItem("got", "Таргариан");

    window.location.href = '../page2/index.html';
    


} else if (baratheon >= targarian && baratheon >= stark &&
    baratheon >= lanister && baratheon >= tully &&
    baratheon >= tyrell && baratheon >= greyjoy) {
    localStorage.setItem("got", "Баратеон");

    window.location.href = '../page2/index.html';

} else if (tully >= targarian && tully >= stark &&
    tully >= lanister && tully >= baratheon &&
    tully >= tyrell && tully >= greyjoy) {
    localStorage.setItem("got", "Тулли");

    window.location.href = '../page2/index.html';
    

} else if (greyjoy >= targarian && greyjoy >= stark &&
    greyjoy >= lanister && greyjoy >= baratheon &&
    greyjoy >= tyrell && greyjoy >= tully) {
    localStorage.setItem("got", "Грей Джой");

    window.location.href = '../page2/index.html';
    

} else if (tyrell >= targarian && tyrell >= stark &&
    tyrell >= lanister && tyrell >= baratheon &&
    tyrell >= greyjoy && tyrell >= tully) {
        localStorage.setItem("got", "Тирелл");

    window.location.href = '../page2/index.html';
    
}

console.log(id);


}
) ;



// let labels = document.getElementsByTagName("label");
// const modalNode = document.querySelectorAll(".modalQuestions");


// for (let i = 0; i < labels.length; i++ ){
//     labels[i].addEventListner("click", onCheckNext);
// } 
// function onCheckNext(){
//     for (let i = 0; i < modalNode.length; i++){
//         modalNode[i].classList.add("modalQuestions_hidden");
//       }
//       modalNode[current].classList.remove("modalQuestions_hidden");

// }


//modalClose.addEventListener("click", closeModal);
//function closeModal(){
//modalBg.classList.remove("modal__bg_active");
//}



