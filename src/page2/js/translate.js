import translate from "/translate.min.js";
translate.engine = "deepl";

export default async function translateText(textEn){
  const textRu = await translate(`${textEn}`, "ru");
  return textRu
}



