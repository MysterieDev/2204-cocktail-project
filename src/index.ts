import { COCKTAIL_BTN } from './dom-utils';
import './styles/styles.css';

function getCocktails(){
    return fetch("http://localhost:3000/drinks")
    .then(res => res.json())
    .then(cocktails => cocktails)
}

async function showCocktail(){
    const cocktails = await getCocktails();
    const randomCocktailIndex = Math.floor(Math.random()*cocktails.length);
    console.log(cocktails[randomCocktailIndex]);
}



function startApp(){
    COCKTAIL_BTN!.addEventListener("click", showCocktail)
}


// Boot up the app
startApp();