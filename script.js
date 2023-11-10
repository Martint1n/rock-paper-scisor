function getComputerChoice () {
const possibilities =["rock", "paper", "scisor"];
const choiceIndex = Math.floor(Math.random() * possibilities.length);
choice = possibilities[choiceIndex];
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

function game(playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5){
        playRound(playerSelection, getComputerChoice());
            //resultat actuel
        const resultat = document.querySelector("#resultat");
        resultat.innerHTML = "";
        const score = document.createElement("div");
        score.textContent =`"L'ordinateur joue ${choice} ! le resultat est : ${text}"`;
        resultat.appendChild(score);

    //resultat total
        const scoreRunning = document.createElement ("div");
        resultatRunning.innerHTML = "";
        scoreRunning.textContent = `"le score actuel est de ${playerScore} pour le misérable humain à ${computerScore}`;
        resultatRunning.appendChild(scoreRunning);
    }

    if (playerScore == 5){
        return alert("Tu es le meilleur joueur");
}
    if (computerScore == 5) {
        return alert("Tu es nul");
}
}



//UI 
const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
game("rock", getComputerChoice());

})

const paper =  document.querySelector("#paper");
paper.addEventListener('click', () => {
game("paper", getComputerChoice());
})

const scisor =  document.querySelector("#scisor");
scisor.addEventListener('click', () => {
playRound("scisor", getComputerChoice());
})
