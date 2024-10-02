const backBtn = document.querySelector("back-btn");
const recipeImage = document.querySelector(".recipe-img");
const recipeName = documment.querySelector(".recipe-name");
const ingredientDetails = document.querySelector(".");
const nutritionDetails = document.querySelector(".");
const recipe = new URLSearchParams(location.search).get("name") ;
console.log(recipe);
async function recipeInfo(){
    const result = await fetch ("https://api.edamam.com/search?q=${recipe}&app_id=46054457&app_key=f1b3cee9d7ca6262daf657a2c7d31a5a");
    const data = await result.json();
    const output = data
}




