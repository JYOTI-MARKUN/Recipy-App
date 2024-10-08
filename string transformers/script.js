const inputValue = document.querySelector(".input-value")
const lowerCase = document.querySelector(".lowercase-para")
const upperCase = document.querySelector(".uppercase-para")
const camelCase = document.querySelector(".camelcase-para")
const pascalCase = document.querySelector(".pascalcase-para")
const snakeCase = document.querySelector(".snakecase-para")
const kebabCase = document.querySelector(".kebabcase-para")
const trimCase = document.querySelector(".trim-para")




function cases (string){   
lowerCase.innerText = string.toLowerCase()
upperCase.innerText = string.toUpperCase()
    const lowerCaseString = string.toLowerCase().split(" ")

   camelCase.innerText =lowerCaseString.reduce((a,c)=>a+c.charAt(0).toUpperCase()+c.slice(1))
  pascalCase.innerText = lowerCaseString.map((value)=>{
     return value.charAt(0).toUpperCase()+value.slice(1)
    }).join("")

   snakeCase.innerText = string.split(" ").join("_") 
   kebabCase.innerText = string.split(" ").join("-")

   trimCase.innerText = string.split(" ").join("")

   
   


}

inputValue.addEventListener("input",(e)=>{
const userInput = e.target.value

cases(userInput)
})












