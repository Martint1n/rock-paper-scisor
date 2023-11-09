function getComputerChoice () {
const possibilities =["rock", "paper", "scisor"];
const choiceIndex = Math.floor(Math.random() * possibilities.length);
const choice = possibilities[choiceIndex];
return  choice;
}

function playRound() {
    const playerSelection = prompt("rock, paper or scisor?").toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection == computerSelection){
    text = "Tie";
    }else  if  ((playerSelection == "rock" && computerSelection == "scisor") ||
                (playerSelection  == "scisor" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "rock")
    ){
    text = "T'as gagné";
    playerScore = ++playerScore;
    }else {
    text = "T'as perdu";
    computerScore = ++computerScore
    }
return [text, computerSelection, playerSelection, playerScore, computerScore]
}

let playerScore = 0;
let computerScore = 0;

function game() {
    while (playerScore < 5 && computerScore < 5){ /*pourquoi &&(et) marche et pas ||(ou)*/
        playRound();
    }

if (playerScore == 5){
    return `Ton score :${playerScore} contre ordi :${computerScore}. Bravo, T'as gagné`;
}
if (computerScore == 5) {
    return `Ton score :${playerScore} contre ordi  :${computerScore}. T'as perdu`;
}
}

console.log(game());