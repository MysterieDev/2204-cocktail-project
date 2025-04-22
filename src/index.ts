import { COCKTAIL_BTN } from './dom-utils';
import './styles/styles.css';

function getCocktails(){
    return fetch("http://localhost:3000/drinks")
    .then(res => res.json())
    .then(cocktails => cocktails)
}

function showCocktail(){

}


function startApp(){
    COCKTAIL_BTN!.addEventListener("click", showCocktail)
}


// Boot up the app
startApp();