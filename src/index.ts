import './styles/styles.css';

function getCocktails(){
    return fetch("http://localhost:3000/drinks")
    .then(res => res.json())
    .then(cocktails => cocktails)
}