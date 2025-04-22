import { COCKTAIL_BTN, COCKTAIL_IMAGE_EL, COCKTAIL_NAME_EL } from './dom-utils';
import { Cocktail } from './interfaces';
import './styles/styles.css';

function getCocktails(){
    return fetch("http://localhost:3000/drinks")
    .then(res => res.json())
    .then( (cocktails: Cocktail[])=> cocktails)
}

async function showCocktail(){
    const cocktails = await getCocktails();
    const randomCocktailIndex = Math.floor(Math.random()*cocktails.length);
    const randomCocktail = cocktails[randomCocktailIndex];
    // render a random Cocktail 
    COCKTAIL_NAME_EL.innerHTML = randomCocktail.strDrink;
    COCKTAIL_IMAGE_EL.src = randomCocktail.strDrinkThumb;
}



function startApp(){
    COCKTAIL_BTN!.addEventListener("click", showCocktail)
}


// Boot up the app
startApp();
