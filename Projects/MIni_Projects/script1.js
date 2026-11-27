
let userChoice = document.querySelectorAll(".userChoice");

let result = document.getElementById("result");
let yourChoice = document.getElementById("player-choice");
let cpuChoice = document.getElementById("cpu-choice");


userChoice = Array.from(userChoice).forEach(function(button){
    button.addEventListener("click", function(e){

        let computerChoice = Math.floor(Math.random()*3);
        let gameChar = ["Stone","Water","Gun"][computerChoice];
        
        yourChoice.textContent = e.target.textContent;
        cpuChoice.textContent = gameChar;

        if(e.target.textContent === gameChar){
            result.textContent = "Match Tie";
        }
        else if((e.target.textContent === 'Stone' && gameChar === 'Gun') || (e.target.textContent === 'Gun' && gameChar === 'Water') || 
        (e.target.textContent === 'Water' && gameChar === 'Stone')){
            result.textContent = "You Are Winner!";
        }else{
            result.textContent = "Wiinner is Computer!";
        }  
    });
});

