function playGame(playerChoice){
    let computerChoice = Math.floor(Math.random()*3);
    let gameChar = ["Stone","Water","Gun"][computerChoice];

    let result = document.getElementById("result");
    let yourChoice = document.getElementById("player-choice");
    let cpuChoice = document.getElementById("cpu-choice");

    yourChoice.textContent = playerChoice;
    cpuChoice.textContent = gameChar;

    if(gameChar === playerChoice){
        result.textContent = "Match Tie";
    }else if((playerChoice === 'Stone' && gameChar === 'Gun') || (playerChoice === 'Gun' && gameChar === 'Water') || 
    (playerChoice === 'Water' && gameChar === 'Stone')){
        result.textContent = "You Are Winner!";
    }else{
        result.textContent = "Winner is Computer!";
    }    
}