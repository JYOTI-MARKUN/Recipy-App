const backBtn = document.querySelector("back-btn");
const recipeImage = document.querySelector(".recipe-img");
const recipeName = document.querySelector(".recipe-name");
const ingredientDetails = document.querySelector(".ingredient-detail");
const nutritionDetails = document.querySelector(".nutrition-detail");
const recipe = new URLSearchParams(location.search).get("name") ;



async function recipeInfo(){
    const result = await fetch (`https://api.edamam.com/search?q=${recipe}&app_id=46054457&app_key=f1b3cee9d7ca6262daf657a2c7d31a5a`);
    const data = await result.json();
    const output = data
    const allData = output.hits[0].recipe
    console.log(allData)
    console.log(allData.totalNutrients)
    const nut = allData.totalNutrients
     allNutrition = Object.entries(nut).map(([key,{label,quantity,unit}])=>{
        return( ` ${label}<b>:</b>${Math.floor(quantity)}${unit}`)
    })

    recipeImage.src = output.hits[0].recipe.image
    recipeName.innerText = `Name : ${allData.label}`
   
    ingredientDetails.innerHTML = `Ingredients <b>: </b> <br>${allData.ingredientLines.map((ingredientLine, index) => {
        return `${index + 1}. ${ingredientLine}`; // Properly format each line
    }).join('<br>')}`


    nutritionDetails.innerHTML = `Nutrition Details <b>:</b> <br>${ allNutrition}`
 
}

recipeInfo()




