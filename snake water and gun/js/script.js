const snake = document.querySelector("#snake");
const water = document.querySelector("#water");
const gun = document.querySelector("#gun");
const user_choice = document.querySelector(".images");
const round_winner = document.querySelector("#para");
const game_result = document.querySelector(".game-result")
const btn = document.querySelector(".button");


// const round

// availabel choices
const choices = ["snake","water","gun"];
let user_score =0;
let comp_score = 0;
let round = prompt("Enter the number of round you wanna play the game");
let current_round = 1;

// computer choice
function computer_choice(){
    comp_choice = Math.floor(Math.random()*choices.length);
    return choices[comp_choice];   
}
    user_choice.addEventListener("click",(e)=>{
       
        const userChoice = e.target.id;
        const computerChoice = computer_choice();
        console.log(userChoice);
        console.log(computerChoice);

        // game round
        if(current_round<=round){ 
         let roundWinner = "";
        // game logic
        if(computerChoice === userChoice){
            console.log("game Draw");
            roundWinner = "No-one, it is a Draw"
        }else
        {
         if(userChoice === "snake")
            {
            if(computerChoice === "water"){
                console.log("you win");            
                console.log(user_score+=1);
                roundWinner = "you";
            }else{console.log("you loose")
                console.log(comp_score+=1)
                roundWinner = "you";
                roundWinner = "Computer";
            }
      
         }
         else if(userChoice === "water")
         {
            if(computerChoice === "gun"){
                console.log("you win")
                console.log(user_score+=1)
                roundWinner = "you";
            }else{console.log("you loose")
                console.log(comp_score+=1)
                roundWinner = "Computer";
            }
           
         }
         else if(userChoice === "gun")
         {
            if(computerChoice === "water"){
                console.log("you win")
                console.log(user_score+=1)
                roundWinner = "you";
            }else{console.log("you loose")
                console.log(comp_score+=1)
                roundWinner = "Computer";
            }      
          
         }    
       
        }
        console.log(user_score);
         console.log(comp_score);     
         console.log(comp_choice);     
         console.log(user_choice);     
         

         round_winner.innerText = `Winner of ${round} round is ${roundWinner} as you chooses ${userChoice} and computer chooses ${computerChoice}`
         current_round++;
      

         if (current_round>round){
            if(user_score>comp_score){
               game_result.innerText = `You win this game of ${round} rounds, your total score is ${user_score} and computer total score is ${comp_score}`;
                
            }else if (user_score<comp_score){
                game_result.innerText= `You loose this game of ${round} rounds, your total score is ${user_score} and computer total score is ${comp_score}`;
            }else{
                game_result.innerText = `This game of ${round} round is a draw, your total score is ${user_score} and computer total score is ${comp_score}`;
            }

         }
     console.log(user_score);
     console.log(comp_score);
     
   

    }
       
        })

btn.addEventListener("click",()=>{
    document.location.href = "../index.html"
})





