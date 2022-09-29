
// console.log(localStorage.getItem("got"));
const node = document.querySelector(".result");

if(localStorage.getItem("got") == "Таргариан") {
    document.getElementById("avatar").src = "assets/targaryen.webp";
    document.getElementById("about").textContent = "Ты из рода Таргарианов. Ты безжалостен и прекрасен."
    const houseIndex = 1;

    async function loadData(){
        try {
            let response = await fetch("https://www.anapioficeandfire.com/api/houses?name=House Targaryen of King's Landing");
            let data = await response.json();
    
            let name = document.createElement('h2');
            name = data[0].name;
            translateText(name);
            name.textContent = textRu;
            node.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            node.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            node.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            node.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();

                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
        
        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        parentNode.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
        
                        if (data.name == "Daenerys Targaryen"){
                            lordImg.src = "assets/Daenerys_Targaryen.jpeg";
                        } else if (data.name == "Cersei Lannister"){
                            lordImg.src = "assets/Cersei_Lannister.jpeg";
                        } else if (data.name == "Tommen Baratheon"){
                            lordImg.src = "assets/Tommen Baratheon.jpeg"
                        } else if (data.name == "Edmure Tully"){
                            lordImg.src = "src/page2/assets/Edmure_Tully.jpeg";
                        } else if (data.name == "Euron Greyjoy"){
                            lordImg.src = "assets/Euron_Greyjoy.jpeg";
                        } else if (data.name == "Mace Tyrell"){
                            lordImg.src = "src/page2/assets/Mace_Tyrell.webp";
                        }
             
                        parentNode.append(lordImg);
                        node.append(parentNode);
        
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
                node.append(words);
    
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
    
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            node.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            node.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].founded;
            node.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            node.append(titles);
            
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
        
        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        parentNode.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
        
                        if (data.name == "Daenerys Targaryen"){
                            lordImg.src = "assets/Daenerys_Targaryen.jpeg";
                        } else if (data.name == "Cersei Lannister"){
                            lordImg.src = "assets/Cersei_Lannister.jpeg";
                        } else if (data.name == "Tommen Baratheon"){
                            lordImg.src = "assets/Tommen Baratheon.jpeg"
                        } else if (data.name == "Edmure Tully"){
                            lordImg.src = "src/page2/assets/Edmure_Tully.jpeg";
                        } else if (data.name == "Euron Greyjoy"){
                            lordImg.src = "assets/Euron_Greyjoy.jpeg";
                        } else if (data.name == "Mace Tyrell"){
                            lordImg.src = "src/page2/assets/Mace_Tyrell.webp";
                        }
            
                        parentNode.append(lordImg);
                        node.append(parentNode);
        
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
                node.append(words);
    
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
    loadData("House Lannister of Casterly Rock")


}
else if(localStorage.getItem("got") == "Баратеон") {
    document.getElementById("avatar").src = "assets/baratheon.webp";
    document.getElementById("about").textContent = "Ты из дома Баратеонов. Вероятнее всего тебя уже нет в живым, прости.";

    async function loadData(){
        try {
            let response = await fetch("https://www.anapioficeandfire.com/api/houses?name=House Baratheon of Storm's End");
            let data = await response.json();
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            node.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            node.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            node.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            node.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                                   
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
        
        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        parentNode.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
        
                        if (data.name == "Daenerys Targaryen"){
                            lordImg.src = "assets/Daenerys_Targaryen.jpeg";
                        } else if (data.name == "Cersei Lannister"){
                            lordImg.src = "assets/Cersei_Lannister.jpeg";
                        } else if (data.name == "Tommen Baratheon"){
                            lordImg.src = "assets/Tommen Baratheon.jpeg"
                        } else if (data.name == "Edmure Tully"){
                            lordImg.src = "src/page2/assets/Edmure_Tully.jpeg";
                        } else if (data.name == "Euron Greyjoy"){
                            lordImg.src = "assets/Euron_Greyjoy.jpeg";
                        } else if (data.name == "Mace Tyrell"){
                            lordImg.src = "src/page2/assets/Mace_Tyrell.webp";
                        }
            
                        parentNode.append(lordImg);
                        node.append(parentNode);
        
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
                node.append(words);
    
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
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            node.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            node.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            node.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            node.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
        
        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        parentNode.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
        
                        if (data.name == "Daenerys Targaryen"){
                            lordImg.src = "assets/Daenerys_Targaryen.jpeg";
                        } else if (data.name == "Cersei Lannister"){
                            lordImg.src = "assets/Cersei_Lannister.jpeg";
                        } else if (data.name == "Tommen Baratheon"){
                            lordImg.src = "assets/Tommen Baratheon.jpeg"
                        } else if (data.name == "Edmure Tully"){
                            lordImg.src = "/assets/Edmure_Tully.jpeg";
                        } else if (data.name == "Euron Greyjoy"){
                            lordImg.src = "assets/Euron_Greyjoy.jpeg";
                        } else if (data.name == "Mace Tyrell"){
                            lordImg.src = "src/page2/assets/Mace_Tyrell.webp";
                        }
            
                        parentNode.append(lordImg);
                        node.append(parentNode);
        
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
                node.append(words);
    
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
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            node.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            node.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            node.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            node.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
        
        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        parentNode.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
        
                        if (data.name == "Daenerys Targaryen"){
                            lordImg.src = "assets/Daenerys_Targaryen.jpeg";
                        } else if (data.name == "Cersei Lannister"){
                            lordImg.src = "assets/Cersei_Lannister.jpeg";
                        } else if (data.name == "Tommen Baratheon"){
                            lordImg.src = "assets/Tommen Baratheon.jpeg"
                        } else if (data.name == "Edmure Tully"){
                            lordImg.src = "src/page2/assets/Edmure_Tully.jpeg";
                        } else if (data.name == "Euron Greyjoy"){
                            lordImg.src = "assets/Euron_Greyjoy.jpeg";
                        } else if (data.name == "Mace Tyrell"){
                            lordImg.src = "src/page2/assets/Mace_Tyrell.webp";
                        }
            
                        parentNode.append(lordImg);
                        node.append(parentNode);
        
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
                node.append(words);
    
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
    
            let name = document.createElement('h2');
            name.textContent = data[0].name;
            node.append(name);
    
            let date = document.createElement('p');
            date.classList.add("date");
            date.innerHTML= `<h3>Основан в: </h3>` + data[0].founded;
            node.append(date);
    
            let region = document.createElement('p');
            region.classList.add("region");
            region.innerHTML = `<h3>Регион: </h3>` + data[0].region;
            node.append(region);
    
            let titles = document.createElement('p');
            titles.classList.add("titles");
            titles.innerHTML = `<h3>Титулы:  </h3>` + data[0].titles;
            node.append(titles);
    
            if (data[0].currentLord) {
                let currentLordUrl = data[0].currentLord;
                async function loadLoard(){
                    try{
                        let response = await fetch(currentLordUrl);
                        let data = await response.json();
                        
                        let parentNode = document.createElement('div');
                        parentNode.classList.add("div_Lord");
                        
        
        
                        let currentLord = document.createElement('p');
                        currentLord.classList.add("currentLord");
                        currentLord.innerHTML = `<h3>Текущий лорд: </h3>` + data.name;
                        parentNode.append(currentLord);
                        
                        let lordImg = document.createElement('img');
                        lordImg.classList.add("lordImg");
        
                        if (data.name == "Daenerys Targaryen"){
                            lordImg.src = "assets/Daenerys_Targaryen.jpeg";
                        } else if (data.name == "Cersei Lannister"){
                            lordImg.src = "assets/Cersei_Lannister.jpeg";
                        } else if (data.name == "Tommen Baratheon"){
                            lordImg.src = "assets/Tommen Baratheon.jpeg"
                        } else if (data.name == "Edmure Tully"){
                            lordImg.src = "/assets/Edmure_Tully.jpeg";
                        } else if (data.name == "Euron Greyjoy"){
                            lordImg.src = "assets/Euron_Greyjoy.jpeg";
                        } else if (data.name == "Mace Tyrell"){
                            lordImg.src = "/assets/Mace_Tyrell.webp";
                        }
            
                        parentNode.append(lordImg);
                        node.append(parentNode);
        
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
                node.append(words);
    
        }
        catch(err){
            console.log(err);
        }
    }
    
    loadData()
}

const houses = []

class House {
  constructor(index,avatar, about, name, date,  words, region, titles, lord, lordImg){
    this.index = index,
    this.avatar = avatar,
    this.about = about,
    this.name = name,
    this.date = date,
    this.words = words,
    this.region = region,
    this.titles = titles,
    this.lord = lord,
    this.lordImg = lordImg

  }
}

async function loadData(house){
  try {
      let response = await fetch("https://www.anapioficeandfire.com/api/houses?name="+house);
      let data = await response.json();
      
      let name = data[0].name;
      let date = data[0].founded;
      let region = data[0].region;
      let titles = data[0].titles;
      let words = data[0].words;
      return {name, date, region, titles, words};
  }

    //   if (data[0].currentLord) {
    //       let currentLordUrl = data[0].currentLord;
    //       async function loadLoard(){
    //           try{
    //               let response = await fetch(currentLordUrl);
    //               let data = await response.json();
                
    //               let lord = data.name;
    //               return lord;
    //           }
    //           catch(err){
    //               console.log(err);
    //           }
    //       }
    //       loadLoard()
 
catch(err){
        console.log(err);
    }
}
let targarianData = loadData("House Targaryen of King's Landing");
let starkData = loadData("House Stark of Winterfell");
let lanisterData = loadData("House Lannister of Casterly Rock");
let baratheonData = loadData("House Baratheon of Storm's End");
let tullyData = loadData("House Tully of Riverrun");
let greyjoyData = loadData("House Greyjoy of Pyke");
let tirrelData = loadData("House Tyrell of Highgarden");

let targarian = new House(1, "assets/targaryen.webp", "Ты из рода Таргарианов. Ты безжалостен и прекрасен.", targarianData.name, targarianData.date, targarianData.words, targarianData.region, targarianData.titles, "assets/Daenerys_Targaryen.jpeg" );
let stark = new House(2, "assets/stark.svg",  "Ты из Старков. Благородный, храбрый, но люди считают тебя второстепенным персонажем. Мы все равно болеем за тебя!",  starkData.name, starkData.date, starkData.words, starkData.region, starkData.titles, starkData.lord, "/assets/Eddard_Stark.webp");
let lanister = new House(3, "assets/lannister.webp", "Ты из Ланнистеров. Твоя мать была хомяком, а твой отец пах бузиной.",lanisterData.name, lanisterData.date, lanisterData.words, lanisterData.region, lanisterData.titles, lanisterData.lord, "assets/Cersei_Lannister.jpeg" );
let baratheon = new House(4, "assets/baratheon.webp","Ты из дома Баратеонов. Вероятнее всего тебя уже нет в живым, прости.", baratheonData.name, baratheonData.date, baratheonData.words, baratheonData.region, baratheonData.titles, baratheonData.lord,"assets/Tommen Baratheon.jpeg");
let tully = new House(5, "assets/tully.webp","Ты из рода Тулли. Никто уже и не помнит о тебе.", tullyData.name, tullyData.date, tullyData.words, tullyData.region, tullyData.titles, tullyData.lord,"/assets/Edmure_Tully.jpeg");
let greyjoy = new House(6,"assets/greyjoy.webp", "Вы Грей Джой. Безжалостный пират и большой неудачник.", greyjoyData.name, greyjoyData.date, greyjoyData.words, greyjoyData.region, greyjoyData.titles, greyjoyData.lord,"assets/Euron_Greyjoy.jpeg");
let tirrel = new House(7,"assets/tyrell.webp", "Ты из дома Тиреллов. Ты богат, но одинок.", tirrelData.name, tirrelData.date, tirrelData.words, tirrelData.region, tirrelData.titles, tirrelData.lord,"/assets/Mace_Tyrell.webp");

console.log(targarian)