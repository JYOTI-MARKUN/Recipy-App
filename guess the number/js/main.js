const enteredNumber = document.querySelector(".input-number");
const checkButton = document.querySelector(".btn");
const gameContainer = document.querySelector(".game-container");
const resultContainer = document.querySelector(".win-container")
const resultBtn = document.querySelector(".result-button")
const numberOfGuess = document.querySelector(".no-guess");
const guessNumber = document.querySelector(".guess-number")
const playAgain =  document.querySelector(".restart");
const resultNumber = document.querySelector(".number-guessed-in")
const actualNUmber = document.querySelector(".actual-num")
const quitGame = document.querySelector(".end")
let guessCounter = 0;


function randomNumber (){
   return Math.floor(Math.random()*100);
    
}
let originalNumber = randomNumber(); 


function checkGuess(){
   
        let userGuessNumber  = parseInt(enteredNumber.value,10);   
         console.log(originalNumber);
         console.log(userGuessNumber);
         guessCounter = guessCounter + 1;
        guessNumber.innerText = `${userGuessNumber}` 
        numberOfGuess.innerText = `${guessCounter}` 
     
        if (userGuessNumber === originalNumber){
           resultContainer.classList.remove("end-game")
           gameContainer.classList.add("start-game")
        //    resultBtn.innerText = "right number"
        resultNumber.innerText = `${guessCounter}`
        actualNUmber.innerText = `${originalNumber}`
        
        } else if (userGuessNumber > originalNumber){
            resultBtn.innerText = "Too High! Guess a smaller Number"
            //   guessCounter++;
        }else if (userGuessNumber < originalNumber) {
            resultBtn.innerText = "Too Low! Guess a Bigger Number"
        } else{
                    resultBtn.innerText = "Please enter a valid number"
        }
        console.log(guessCounter);
       
    
}

checkButton.addEventListener("click",checkGuess)

playAgain.addEventListener("click",()=>{
    resultContainer.classList.add("end-game")
    gameContainer.classList.remove("start-game")
    checkButton.removeEventListener("click",checkGuess)
    guessCounter = 0;
    originalNumber = randomNumber()
    guessNumber.innerText = "" 
    numberOfGuess.innerText = ""
    checkButton.addEventListener("click",checkGuess)
    enteredNumber.value = ""
    resultBtn.innerText = ""
})


quitGame.addEventListener("click",()=>{
     window.location.href = "../index.html"
})


