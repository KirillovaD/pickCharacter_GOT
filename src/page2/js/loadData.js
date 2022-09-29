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
      let lord;

      if (data[0].currentLord) {
          let currentLordUrl = data[0].currentLord;
          async function loadLoard(){
              try{
                  let response = await fetch(currentLordUrl);
                  let data = await response.json();
                
                  lord = data.name;
                  return lord;
              }
              catch(err){
                  console.log(err);
              }
          }
          loadLoard()

      }
      console.log(name, date, region, titles, words, lord)
      return {name, date, region, titles, words, lord}
      

  }
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

let targarian = new House(1, "assets/targaryen.webp", "Ты из рода Таргарианов. Ты безжалостен и прекрасен.", targarianData.name, targarianData.date, targarianData.words, targarianData.region, targarianData.titles, targarianData.lord, "assets/Daenerys_Targaryen.jpeg" );
let stark = new House(2, "assets/stark.svg",  "Ты из Старков. Благородный, храбрый, но люди считают тебя второстепенным персонажем. Мы все равно болеем за тебя!",  starkData.name, starkData.date, starkData.words, starkData.region, starkData.titles, starkData.lord, "/assets/Eddard_Stark.webp");
let lanister = new House(3, "assets/lannister.webp", "Ты из Ланнистеров. Твоя мать была хомяком, а твой отец пах бузиной.",lanisterData.name, lanisterData.date, lanisterData.words, lanisterData.region, lanisterData.titles, lanisterData.lord, "assets/Cersei_Lannister.jpeg" );
let baratheon = new House(4, "assets/baratheon.webp","Ты из дома Баратеонов. Вероятнее всего тебя уже нет в живым, прости.", baratheonData.name, baratheonData.date, baratheonData.words, baratheonData.region, baratheonData.titles, baratheonData.lord,"assets/Tommen Baratheon.jpeg");
let tully = new House(5, "assets/tully.webp","Ты из рода Тулли. Никто уже и не помнит о тебе.", tullyData.name, tullyData.date, tullyData.words, tullyData.region, tullyData.titles, tullyData.lord,"/assets/Edmure_Tully.jpeg");
let greyjoy = new House(6,"assets/greyjoy.webp", "Вы Грей Джой. Безжалостный пират и большой неудачник.", greyjoyData.name, greyjoyData.date, greyjoyData.words, greyjoyData.region, greyjoyData.titles, greyjoyData.lord,"assets/Euron_Greyjoy.jpeg");
let tirrel = new House(7,"assets/tyrell.webp", "Ты из дома Тиреллов. Ты богат, но одинок.", tirrelData.name, tirrelData.date, tirrelData.words, tirrelData.region, tirrelData.titles, tirrelData.lord,"/assets/Mace_Tyrell.webp");

