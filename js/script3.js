const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
    'X-RapidAPI-Key': 'f19014665fmsha9ddb48a908aef0p1e5736jsndfa4c67d1049'
  }
};

const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin';

async function getProductList() {
  const response = await fetch(url, options);
  const results = await response.json();

  const allDrinks = results.drinks;

  for (let drink of allDrinks) {
    console.log("drink", drink.strDrink);
  }
}

getProductList();