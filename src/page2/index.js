console.log(localStorage.getItem("got"));

if(localStorage.getItem("got") == "Таргариан") {
    document.getElementById("avatar").src = "assets/targaryen.png";
    document.getElementById("about").textContent = "Ты из рода Таргарианов. Ты безжалостен и прекрасен."
} 
else if(localStorage.getItem("got") == "Старк") {
    document.getElementById("avatar").src = "assets/stark.png";
    document.getElementById("about").textContent = "Ты из Старков. Благородный, храбрый, но люди считают тебя второстепенным персонажем. Мы все равно болеем за тебя!"

}
else if(localStorage.getItem("got") == "Ланистер") {
    document.getElementById("avatar").src = "assets/lannister.jpg";
    document.getElementById("about").textContent = "Ты из Ланнистеров. Твоя мать была хомяком, а твой отец пах бузиной."

}
else if(localStorage.getItem("got") == "Баратеон") {
    document.getElementById("avatar").src = "assets/baratheon.png";
    document.getElementById("about").textContent = "Ты из дома Баратеонов. Вероятнее всего тебя уже нет в живым, прости."

}
else if(localStorage.getItem("got") == "Тулли") {
    document.getElementById("avatar").src = "assets/tully.jpg";
    document.getElementById("about").textContent = "Ты из рода Тулли. Никто уже и не помнит о тебе."

}
else if(localStorage.getItem("got") == "Грей Джой") {
    document.getElementById("avatar").src = "assets/greyjoy.png";
    document.getElementById("about").textContent = "Вы Грей Джой. Безжалостный пират и большой неудачник."

}
else if(localStorage.getItem("got") == "Тирелл") {
    document.getElementById("avatar").src = "assets/tyrell.jpg";
    document.getElementById("about").textContent = "Ты из дома Тиреллов. Ты богат, но одинок."

}




let radio = new Audio();
radio.src = "../page1/assets/audio.mp3";

document.addEventListener("DOMContentLoaded", () => {
    radio.play();
})

document.querySelector('#off').onclick = function() {

    radio.pause()
    };
