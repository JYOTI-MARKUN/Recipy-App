const input = document.querySelector(".input")
const btn = document.querySelector(".shake-it")
const answer = document.querySelector(".ans-para")


let answers = ["Yes","No","Maybe","Ask again later","Definitely","It's unlikely","Without a doubt","Cannot predict now"]
const randNum = Math.ceil(Math.random()*answers.length)
console.log(answers[randNum])

btn.addEventListener("click",()=>{
    console.log("button is clicked")
    btn.innerText = "Getting....."
  
})


