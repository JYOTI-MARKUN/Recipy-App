const recipeCard = document.querySelector(".recipe-cards")



const url = "https://api.edamam.com/search?q=pizza&app_id=46054457&app_key=f1b3cee9d7ca6262daf657a2c7d31a5a&from=0&to=100";
async function response (){
    const result = await fetch(url)
    const data = await result.json()
    const output = data.hits
 
 
    output.forEach((recipe)=>{     
        let recipeImage = recipe.recipe.image;
       // creating outerdiv for each recipe and adding class in it
        const innerdiv = document.createElement("div")
        innerdiv.classList.add("recipe-content")
        // creating recipe image  

        const image = document.createElement("img")
        image.src = recipeImage

        // creating para to store name of recipe
        const para = document.createElement("p");
        para.innerText = recipe.recipe.label;

       // creaing button to get to that percular recipe on clicking it
        const btn = document.createElement("button")
        btn.innerText = "Get Recipe"
        innerdiv.appendChild(image)
        innerdiv.appendChild(para)
        innerdiv.appendChild(btn)
        recipeCard.appendChild(innerdiv)
    })

}

response()