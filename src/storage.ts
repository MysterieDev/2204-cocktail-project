import { Cocktail } from "./interfaces";

const COCKTAILS_LOCALSTORAGE_KEY = "favorite_cocktails"

export function setLocalstorageCocktails(cocktails: Cocktail[]) {
    const cocktailsJSON = JSON.stringify(cocktails)
    window.localStorage.setItem(COCKTAILS_LOCALSTORAGE_KEY, cocktailsJSON)
}

export function getLocalstorageCocktails() {
    const cocktailsJSON = window.localStorage.getItem(COCKTAILS_LOCALSTORAGE_KEY);

    if (cocktailsJSON) {
        const cocktailsArray = JSON.parse(cocktailsJSON);
        return cocktailsArray;
    } else {
        return [];
    }
}