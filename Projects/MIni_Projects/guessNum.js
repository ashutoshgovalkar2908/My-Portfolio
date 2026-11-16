
let userInput = document.querySelector("#in");
let result = document.querySelector("#ans");
let resultBtn = document.querySelector("#resultBtn");
let resetBtn = document.querySelector("#resetBtn");
let randomNumber = Math.floor(Math.random()*11);
let errormessage = document.querySelector(".errorMessage");
let remainingGuess = document.querySelector(".remainingGuess");
let guessCounter = 5;
let userNumber = document.querySelector("#userNumber");
let resultContainer = document.querySelector("#result");


resultBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(userInput.value === ""){
        errormessage.style.display = "block";
        errormessage.innerHTML = "Please enter a number";
        return;
    }

    errormessage.style.display = "none";
    let userInputValue = parseInt(userInput.value);

    remainingGuess.innerHTML = `Remaining Guesses - ${guessCounter--}/5`;

    if(guessCounter < 0){
        errormessage.style.display = "block";
        errormessage.innerHTML = "You lost the game";
        return;
    }

    if(userInputValue === randomNumber){
        userNumber.style.display = "none";
        result.innerHTML = "Correct Guess";
    }else{
        result.innerHTML = "Wrong Guess";
    }
       
});

resetBtn.addEventListener("click",(e)=>{
    location.reload();
    errormessage.style.display = "none";
    if(userNumber.style.display === "none"){
        userNumber.style.display = "flex";
    }
    guessCounter = 5;
});






