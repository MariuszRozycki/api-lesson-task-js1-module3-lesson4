// question 1
const CORS_URL = "https://noroffcors.herokuapp.com/";
const API_URL = "https://elephant-api.herokuapp.com/elephants";
const url = CORS_URL + API_URL;

async function getElephants() {
  const response = await fetch(url);
  const results = await response.json();
  console.log(results.length);

  for (let result of results) {
    console.log("result:", result);
  }
}

getElephants();