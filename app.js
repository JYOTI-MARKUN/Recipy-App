const recipeCard = document.querySelector(".recipe-cards");
const userInput = document.querySelector(".indgredient-clinput");
const theme = document.querySelector(".change-theme");

let recipe = "cake";
let url;


// toggle between light and dark mode
theme.addEventListener("click",()=>{
  document.body.classList.toggle("dark")
  console.log("i am clicked")

  if(document.body.classList.contains("dark")){
    theme.innerHTML = `<i class="fa-regular fa-sun"></i> &nbsp;&nbsp;Light mode`
  } else{
    theme.innerHTML = `<i class="fa-regular fa-moon"></i> &nbsp;&nbsp;Dark mode`
  }
  
})



// get the userInput and search the recipe according to userInput
userInputValue = userInput.addEventListener("input", (e) => {
  recipe = e.target.value ;
  url = `https://api.edamam.com/search?q=${recipe}&app_id=46054457&app_key=f1b3cee9d7ca6262daf657a2c7d31a5a&from=0&to=100`;
  response(url);
});

async function response(url) {
  const result = await fetch(url);
  const data = await result.json();
  const output = data.hits;
  console.log(output[0]); 
  console.log(output[0].recipe.totalNutrients.CA);
  recipeCard.innerHTML = "";


  // get very recipe data
  output.forEach((recipe) => {
    const ingredients = recipe.recipe.ingredients;
    // console.log(ingredients[0].text)
    // ingredients.forEach((ingredient)=>{
    //     console.log(ingredient.text)
    // })

    let recipeImage = recipe.recipe.image;
    // creating outerdiv for each recipe and adding class in it
    const innerTag = document.createElement("a");
    innerTag.classList.add("recipe-content");
    innerTag.href = `/recipe.html?name=${recipe.recipe.label}`

    // creating recipe image
    const image = document.createElement("img");
    image.src = recipeImage;
    // console.log(image.src)

    // creating para to store name of recipe
    const para = document.createElement("p");
    para.innerText = recipe.recipe.label;

    // creting para2 to store calories details
    const calPara = document.createElement("p");
    calPara.classList.add("calpara")
    calPara.innerText = `Calories Details: ${Math.floor(recipe.recipe.calories)}`;

    // creaing button to get to that percular recipe on clicking it
    const btn = document.createElement("button");
    btn.innerText = "Get Recipe";
     
    // event listner on the button to get the ingredient of a perticular recipe
    btn.addEventListener("Click",(e)=>{
            console.log("clicked")
            window.location.href= `recipe.html?recipe=${recipe.recipe.label}`
    })

    innerTag.appendChild(image);
    innerTag.appendChild(para);
    innerTag.appendChild(calPara);
    innerTag.appendChild(btn);
    recipeCard.appendChild(innerTag);
    
  });
}

response(
  `https://api.edamam.com/search?q=${recipe}&app_id=46054457&app_key=f1b3cee9d7ca6262daf657a2c7d31a5a&from=0&to=100`
);
