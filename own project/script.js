const questions = [
    {ques:"Inside which HTML element do we put the JavaScript?",
        options:["js","scripting","javascript","script"],
        answer:"script",
    },
    {ques:"Which type of JavaScript language is ___?",
        options:["Object-Oriented","Object-Based","Assembly-language","High-level"],
        answer:"Object-Based",
    },
    {ques:"Inside which HTML el?",
        options:["j","scripting","javascript","script"],
        answer:"javascript",
    },
    {ques:"Inside which HTML element do we put the JavaScript?",
        options:["js","scripting","javascript","script"],
        answer:"script",
    },
    {ques:"Inside which HTML element do we put the J?",
        options:["j","scripting","javascript","script"],
        answer:"j",
    },
    {ques:"Inside which HTML el?",
        options:["j","scripting","javascript","script"],
        answer:"javascript",
    },
]

var currentQuestionNum = 0;

const que = document.querySelector(".question span");
const op1 = document.querySelector("#op1");
const op2 = document.querySelector("#op2");
const op3 = document.querySelector("#op3");
const op4 = document.querySelector("#op4");
const nextque = document.querySelector(".next-ques span");
const optionchoosen = document.querySelector(".options-div");
const inneroption = document.querySelectorAll(".options-div .options")
const questionNumber = document.querySelector(".inner-para span");


function loadQuestion(num){
    que.innerText = questions[num].ques;
    op1.innerText = questions[num].options[0];
    op2.innerText = questions[num].options[1];
    op3.innerText = questions[num].options[2];
    op4.innerText = questions[num].options[3]; 
    op1.style.border = "3px solid #D9D9D9"   
    op2.style.border = "3px solid #D9D9D9"   
    op3.style.border = "3px solid #D9D9D9"   
    op4.style.border = "3px solid #D9D9D9"  
    enableOption(); 
}

function enableOption(){
    inneroption.forEach((option)=>{
        option.disabled = false
    })
}

function disableOption(){
    inneroption.forEach((option)=>{
        option.disabled = true
    })
}

nextque.addEventListener("click",(e)=>{
    currentQuestionNum++;
    loadQuestion(currentQuestionNum);
    questionNumber.innerText=`${currentQuestionNum+1}/${questions.length}`; 
})

loadQuestion(currentQuestionNum);
questionNumber.innerText=`${currentQuestionNum+1}/${questions.length}`;




optionchoosen.addEventListener("click",(e)=>{
    const selectedAnswer = e.target.innerText;
    const selectedAnswerId = e.target;  
    const correctAnswer = questions[currentQuestionNum].answer; 
    disableOption();

    if(selectedAnswer==correctAnswer){       
       selectedAnswerId.style.border = "3px solid green";
       selectedAnswerId.innerHTML += '<img src="image/correct.svg" alt="">'

    }else{
        console.log("false")
        selectedAnswerId.style.border = "3px solid red";
        selectedAnswerId.innerHTML+= '<img src="image/wrong.svg" alt="">'
         
        inneroption.forEach((option)=>{
            console.log(option.innerText)  
            if (option.innerText == correctAnswer){
                option.style.border = "3px solid green";
                option.innerHTML += '<img src="image/correct.svg" alt="">' 
            }       
        })
      
    }
})
        
