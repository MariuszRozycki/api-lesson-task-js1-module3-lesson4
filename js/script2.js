// question 2
const options = {
  "headers": {
    "x-rapidapi-key": "f19014665fmsha9ddb48a908aef0p1e5736jsndfa4c67d1049",
  }
};

const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

async function callUrbanDictionary() {
  const response = await fetch(API_URL, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();