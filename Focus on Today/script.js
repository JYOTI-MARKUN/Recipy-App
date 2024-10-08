const allTickBox = document.querySelectorAll(".circlebox");
const allInputValues = document.querySelectorAll(".goal-value");
const errorMsg = document.querySelector(".error-msg");
const progressAmt = document.querySelector(".progress-amount");
const quoteLabel = document.querySelector(".para");
const lastQuoteLabel = document.querySelector(".thought")


// creating an empty object or the values stored in the local storage

// const inputvalues  = JSON.parse(localStorage.getItem('inputvalues')) || {
//     first:{
//         name:"",
//         completed:false,
//     },
//     second:{
//         name:"",
//         completed:false,
//     },
//     third:{
//         name:"",
//         completed:false,
//     },
//     forth:{
//         name:"",
//         completed:false,
//     }

// };

const inputvalues  = JSON.parse(localStorage.getItem('inputvalues')) || {};

let completedGoalCount = Object.values(inputvalues).filter((goal)=>goal.completed).length;  // to check how many goals are completed
const allQuotes = ['Raise the bar by completing your goals!','Keep going you can do this','Well begun is half done!','Just a step away, keep going!',' Whoa! You just completed all the goals, time for chill'];
const lastQuote =['“Move one step ahead, today!”','"Yay! you started and completed one Goal"','"Keep Laerning and complete your Goals"','“Keep Going, You’re making great progress!”','"Welldone! you completed all your goals"']
progressAmt.style.width = `${completedGoalCount/allInputValues.length*100}%` // so that after reloadng page wdth will show
progressAmt.firstElementChild.innerText = `${completedGoalCount}/${allInputValues.length} Completed`;
quoteLabel.innerText = allQuotes[completedGoalCount];
lastQuoteLabel.innerText = lastQuote[completedGoalCount];


// adding event listner to all the checkboxes


allTickBox.forEach((tickbox)=>{
tickbox.addEventListener('click',()=>{
    // checking wether all input fields are filled or not by converting nodeList of allINputValues to array so that we can use every method in it
   const allInputFilled = [...allInputValues].every((input)=>{
    // console.log(input.value);
     return input.value
   })



   // checking if all input field are filled only then added the class completed i.e. tick mark


if(allInputFilled){
    tickbox.parentElement.classList.toggle("completed");  

   const inputId = tickbox.nextElementSibling.id;  // thi will give the input id of the tickbox where we have clcked 
  inputvalues[inputId].completed = !inputvalues[inputId].completed;  // this will make complete true if it is false or vice versa
  completedGoalCount = Object.values(inputvalues).filter((goal)=>goal.completed).length;
  progressAmt.style.width = `${completedGoalCount/allInputValues.length*100}%`;
  progressAmt.firstElementChild.innerText = `${completedGoalCount}/${allInputValues.length} Completed`;
  quoteLabel.innerText = allQuotes[completedGoalCount];
  lastQuoteLabel.innerText = lastQuote[completedGoalCount];
  localStorage.setItem("inputvalues",JSON.stringify(inputvalues));

}


// else show the error message
else{
    errorMsg.parentElement.classList.add("show-error");  // adding show error class to the parent 
}
})
});


allInputValues.forEach((input)=>{

    // console.log(inputvalues[input.id]);  // here pls notte input.id and e.target.value both are same thing
  // aading localstorage value to the UI

//   console.log(inputvalues[input.id]) // this will give us whole  value of first second and third input stored in the local storage
  if (inputvalues[input.id]){

      input.value =inputvalues[input.id].name
           if(inputvalues[input.id].completed){
              input.parentElement.classList.add("completed")
           }
  }


      input.addEventListener('focus',()=>{
        errorMsg.parentElement.classList.remove("show-error");
      })
    
      input.addEventListener('input',(e)=>{

        // checking wether our goal is completed if yes then we can not edit the text inside it
        if (inputvalues[input.id]){

            if(inputvalues[input.id].completed){
                input.value = inputvalues[input.id].name
                return
            }
        }
        inputvalues[e.target.id] = {
            name :e.target.value,
            completed:false,}
         // creating values inside object (i.e. key value pair)

        // console.log(inputvalues);  // just to check

        localStorage.setItem("inputvalues",JSON.stringify(inputvalues))})

  })