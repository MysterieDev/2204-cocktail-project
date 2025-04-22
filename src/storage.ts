import { Cocktail } from "./interfaces";

const COCKTAILS_LOCALSTORAGE_KEY = "favorite_cocktails"

export function setLocalstorageCocktails(cocktails: Cocktail[]){
    const cocktailsJSON = JSON.stringify(cocktails)
    window.localStorage.setItem(COCKTAILS_LOCALSTORAGE_KEY, cocktailsJSON)
}