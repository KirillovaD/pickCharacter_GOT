console.log(localStorage.getItem("got"));
const result = document.querySelector(".result")
const houseName = document.querySelector(".houseName")
const data = document.querySelector(".data")
const firstCol = document.querySelector(".firstCol")
const secondCol = document.querySelector(".secondCol")



if(localStorage.getItem("got") == "Таргариан") {
    document.getElementById("avatar").src = "assets/targaryen.webp";
    document.getElementById("about").textContent = "Ты из рода Таргарианов. Ты безжалостен и прекрасен."

    async function loadData(){
        try {
            let response = await fetch("https://www.anapioficeandfire.com/api/houses?name=House Targaryen of King's Landing");
            let data = await response.json();
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            // translateText(name);
            // name.textContent = textRu;
            houseName.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            firstCol.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            firstCol.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            firstCol.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        console.log(data.name)
                        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        secondCol.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
                        lordImg.src = "assets/Daenerys_Targaryen.jpeg";

                        secondCol.append(lordImg);
                    }
                    catch(err){
                        console.log(err);
                    }
                }
                loadLoard()
            }
            
            let words = document.createElement('p');
                words.classList.add("words");
                words.innerHTML = `<h3>Девиз:  </h3>` + data[0].words;
                firstCol.append(words);
        }
        catch(err){
            console.log(err);
        }
    }
    loadData()
}



else if(localStorage.getItem("got") == "Старк") {
    document.getElementById("avatar").src = "assets/stark.svg";
    document.getElementById("about").textContent = "Ты из Старков. Благородный, храбрый, но люди считают тебя второстепенным персонажем. Мы все равно болеем за тебя!";

    async function loadData(){
        try {
            let response = await fetch("https://www.anapioficeandfire.com/api/houses?name=House Stark of Winterfell");
            let data = await response.json();
            console.log(data);
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            houseName.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            firstCol.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].founded;
            firstCol.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            firstCol.append(titles);
            
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        console.log(data.name)
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        secondCol.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
                        lordImg.src = "assets/stark2.jpg";
                        
                        secondCol.append(lordImg);
                    }
                    catch(err){
                        console.log(err);
                    }
                }
                loadLoard()
            }
            let words = document.createElement('p');
                words.classList.add("words");
                words.innerHTML = `<h3>Девиз:  </h3>` + data[0].words;
                firstCol.append(words);
        }
        catch(err){
            console.log(err);
        }
    }
    loadData()
}



else if(localStorage.getItem("got") == "Ланистер") {
    document.getElementById("avatar").src = "assets/lannister.webp";
    document.getElementById("about").textContent = "Ты из Ланнистеров. Твоя мать была хомяком, а твой отец пах бузиной."

    async function loadData(){
        try {
            let response = await fetch("https://www.anapioficeandfire.com/api/houses?name=House Lannister of Casterly Rock");
            let data = await response.json();
            console.log(data);
            
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            houseName.append(name);

            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            firstCol.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            firstCol.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            firstCol.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        console.log(data.name)
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        secondCol.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
                        lordImg.src = "assets/Cersei_Lannister.jpeg";

                        secondCol.append(lordImg);
                    }
                    catch(err){
                        console.log(err);
                    }
                }
                loadLoard()
            }
            let words = document.createElement('p');
                words.classList.add("words");
                words.innerHTML = `<h3>Девиз:  </h3>` + data[0].words;
                firstCol.append(words);
        }
        catch(err){
            console.log(err);
        }
    }    
    loadData()
}



else if(localStorage.getItem("got") == "Баратеон") {
    document.getElementById("avatar").src = "assets/baratheon.webp";
    document.getElementById("about").textContent = "Ты из дома Баратеонов. Вероятнее всего тебя уже нет в живым, прости.";

    async function loadData(){
        try {
            let response = await fetch("https://www.anapioficeandfire.com/api/houses?name=House Baratheon of Storm's End");
            let data = await response.json();
            console.log(data);
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            houseName.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            firstCol.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            firstCol.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            firstCol.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        console.log(data.name)
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        secondCol.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
                        lordImg.src = "assets/Tommen Baratheon.jpeg"

                        secondCol.append(lordImg);
                    }
                    catch(err){
                        console.log(err);
                    }
                }
                loadLoard()
            }
            let words = document.createElement('p');
                words.classList.add("words");
                words.innerHTML = `<h3>Девиз:  </h3>` + data[0].words;
                firstCol.append(words);
        }
        catch(err){
            console.log(err);
        }
    }
    loadData()
}



else if(localStorage.getItem("got") == "Тулли") {
    document.getElementById("avatar").src = "assets/tully.webp";
    document.getElementById("about").textContent = "Ты из рода Тулли. Никто уже и не помнит о тебе.";

    async function loadData(){
        try {
            let response = await fetch("https://www.anapioficeandfire.com/api/houses?name=House Tully of Riverrun");
            let data = await response.json();
            console.log(data);
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            houseName.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            firstCol.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            firstCol.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            firstCol.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        console.log(data.name)
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        secondCol.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
                        lordImg.src = "src/page2/assets/Edmure_Tully.jpeg";

                        secondCol.append(lordImg);
                    }
                    catch(err){
                        console.log(err);
                    }
                }
                loadLoard()
            }
            let words = document.createElement('p');
                words.classList.add("words");
                words.innerHTML = `<h3>Девиз:  </h3>` + data[0].words;
                firstCol.append(words);
        }
        catch(err){
            console.log(err);
        }
    }
    loadData()
}



else if(localStorage.getItem("got") == "Грей Джой") {
    document.getElementById("avatar").src = "assets/greyjoy.webp";
    document.getElementById("about").textContent = "Вы Грей Джой. Безжалостный пират и большой неудачник.";
    async function loadData(){
        try {
            let response = await fetch("https://www.anapioficeandfire.com/api/houses?name=House Greyjoy of Pyke");
            let data = await response.json();
            console.log(data);
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            houseName.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            firstCol.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            firstCol.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            firstCol.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        console.log(data.name)
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        secondCol.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
                        lordImg.src = "assets/Euron_Greyjoy.jpeg";
            
                        secondCol.append(lordImg);
                    }
                    catch(err){
                        console.log(err);
                    }
                }
                loadLoard()
            }
            let words = document.createElement('p');
                words.classList.add("words");
                words.innerHTML = `<h3>Девиз:  </h3>` + data[0].words;
                firstCol.append(words);
        }
        catch(err){
            console.log(err);
        }
    }
    loadData()
}



else if(localStorage.getItem("got") == "Тирелл") {
    document.getElementById("avatar").src = "assets/tyrell.webp";
    document.getElementById("about").textContent = "Ты из дома Тиреллов. Ты богат, но одинок.";

    async function loadData(){
        try {
            let response = await fetch("https://www.anapioficeandfire.com/api/houses?name=House Tyrell of Highgarden");
            let data = await response.json();
            console.log(data);
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            houseName.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            firstCol.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            firstCol.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            firstCol.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        console.log(data.name)
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");

                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        secondCol.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
                        lordImg.src = "assets/Mace_Tyrell.webp";
            
                        secondCol.append(lordImg);
                    }
                    catch(err){
                        console.log(err);
                    }
                }
                loadLoard()
            }
            let words = document.createElement('p');
                words.classList.add("words");
                words.innerHTML = `<h3>Девиз:  </h3>` + data[0].words;
                firstCol.append(words);
        }
        catch(err){
            console.log(err);
        }
    }
    loadData()
}



let radio = new Audio();
radio.src = "../page1/assets/audio.mp3";

document.addEventListener("DOMContentLoaded", () => {
    radio.play()
    });
    
    document.querySelector('#off').onclick = function() {
    
    radio.pause()
    };