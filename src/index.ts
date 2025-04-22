import { COCKTAIL_BTN, COCKTAIL_FAVORITE_BTN, COCKTAIL_IMAGE_EL, COCKTAIL_NAME_EL } from './dom-utils';
import { Cocktail } from './interfaces';
import { setLocalstorageCocktails } from './storage';
import './styles/styles.css';

// APP STATE - START
let currentCocktail: Cocktail;
let favorite_cocktails: Cocktail[] = [];
// APP STATE - END


function getCocktails(){
    return fetch("http://localhost:3000/drinks")
    .then(res => res.json())
    .then( (cocktails: Cocktail[])=> cocktails)
}

async function showCocktail(){
    const cocktails = await getCocktails();
    const randomCocktailIndex = Math.floor(Math.random()*cocktails.length);
    currentCocktail = cocktails[randomCocktailIndex];
    // render a random Cocktail 
    COCKTAIL_NAME_EL.innerHTML = currentCocktail.strDrink;
    COCKTAIL_IMAGE_EL.src = currentCocktail.strDrinkThumb;
}

function addToFavorites(){
    // new entry to favorites
    favorite_cocktails.push(currentCocktail);
    // synchronize Localstorage
    setLocalstorageCocktails(favorite_cocktails);

    console.log(favorite_cocktails)
}

function startApp(){
    COCKTAIL_BTN!.addEventListener("click", showCocktail);
    COCKTAIL_FAVORITE_BTN.addEventListener("click", addToFavorites);
    showCocktail();
}


// Boot up the app
startApp();
