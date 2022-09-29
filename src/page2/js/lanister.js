const targarianHouse = {
  index: "3",
  house: "House Lannister of Casterly Rock",
  avatar: "assets/lannister.webp",
  about : "Ты из Ланнистеров. Твоя мать была хомяком, а твой отец пах бузиной.",
  lordImg : "assets/Cersei_Lannister.jpeg"
}


async function loadData(){
  try {
      let response = await fetch(`https://www.anapioficeandfire.com/api/houses?name=`+targarianHouse.house);
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