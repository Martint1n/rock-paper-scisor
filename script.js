function getComputerChoice () {
const possibilities =["rock", "paper", "scisor"];
const choiceIndex = Math.floor(Math.random() * possibilities.length);
const choice = possibilities[choiceIndex];
return  choice;
}

function playRound(playerSelection, computerSelection) {

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

/*function game() {
    while (playerScore < 5 && computerScore < 5){ pourquoi &&(et) marche et pas ||(ou)
        playRound();
    }

if (playerScore == 5){
    return `Ton score :${playerScore} contre ordi :${computerScore}. Bravo, T'as gagné`;
}
if (computerScore == 5) {
    return `Ton score :${playerScore} contre ordi  :${computerScore}. T'as perdu`;
}
}

console.log(game());*/

/*UI*/
const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);


    const resultat = document.querySelector("#resultat")
    const score = document.createElement("div")
    score.textContent =`"le resultat est : ${text}"`
    resultat.appendChild(score)
})

const paper =  document.querySelector("#paper");
paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);

    const resultat = document.querySelector("#resultat")
    const score = document.createElement("div")
    score.textContent =`"le resultat est : ${text}"`
    resultat.appendChild(score)
})

const scisor =  document.querySelector("#scisor");
scisor.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound("scisor", computerSelection);

    const resultat = document.querySelector("#resultat")
    const score = document.createElement("div")
    score.textContent =`"le resultat est : ${text}"`
    resultat.appendChild(score)
})
