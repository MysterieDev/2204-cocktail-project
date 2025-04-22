import { COCKTAIL_BTN, COCKTAIL_FAVORITE_BTN, COCKTAIL_IMAGE_EL, COCKTAIL_NAME_EL, FAVORITES_DIV_EL } from './dom-utils';
import { Cocktail } from './interfaces';
import { getLocalstorageCocktails, setLocalstorageCocktails } from './storage';
import './styles/styles.css';

// APP STATE - START
let currentCocktail: Cocktail;
let favorite_cocktails: Cocktail[] = [];
// APP STATE - END


function getCocktails() {
    return fetch("http://localhost:3000/drinks")
        .then(res => res.json())
        .then((cocktails: Cocktail[]) => cocktails)
}

async function showCocktail() {
    const cocktails = await getCocktails();
    const randomCocktailIndex = Math.floor(Math.random() * cocktails.length);
    currentCocktail = cocktails[randomCocktailIndex];
    // render a random Cocktail 
    COCKTAIL_NAME_EL.innerHTML = currentCocktail.strDrink;
    COCKTAIL_IMAGE_EL.src = currentCocktail.strDrinkThumb;
}

function renderFavorites() {
    // reset HTML
    FAVORITES_DIV_EL.innerHTML = "";
    favorite_cocktails.forEach(cocktail => {
        const SINGLE_FAVORITE_ENTRY = document.createElement("DIV");
        SINGLE_FAVORITE_ENTRY.innerHTML = `
       <p>${cocktail.strDrink}</p>
       <img src="${cocktail.strDrinkThumb}" style="width:50px" />
       `

        FAVORITES_DIV_EL.appendChild(SINGLE_FAVORITE_ENTRY);
    })
}

function addToFavorites(idDrink: string) {

    const isAlreadyTagged = favorite_cocktails.find(cocktail => cocktail.idDrink === idDrink);

    if (isAlreadyTagged) {
        return; // terminiert die Funktion
    }

    // new entry to favorites
    favorite_cocktails.push(currentCocktail);
    // synchronize Localstorage
    setLocalstorageCocktails(favorite_cocktails);
    renderFavorites();
}

function startApp() {
    COCKTAIL_BTN!.addEventListener("click", showCocktail);
    COCKTAIL_FAVORITE_BTN.addEventListener("click", () => addToFavorites(currentCocktail.idDrink));
    showCocktail();
    favorite_cocktails = getLocalstorageCocktails();
    renderFavorites();
}


// Boot up the app
startApp();
