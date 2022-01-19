function computerPlay() {
    random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else if (random == 2) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelectionLowercase = playerSelection.toLowerCase();
    if (playerSelectionLowercase == "rock") {
        if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock.");
            return "c";
        } else if (computerSelection == "Scissors") {
            console.log("You Win! Rock beats Scissors.");
            return "p";
        } else if (computerSelection == "Rock") {
            console.log("Draw.");
            return "d";
        }
    }
    if (playerSelectionLowercase == "paper") {
        if (computerSelection == "Paper") {
            console.log("Draw.");
            return "d";
        } else if (computerSelection == "Scissors") {
            console.log("You Lose! Scissors beats Paper.");
            return "c";
        } else if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock.");
            return "p";
        }
    }
    if (playerSelectionLowercase == "scissors") {
        if (computerSelection == "Paper") {
            console.log("You Win! Scissors beat Paper.");
            return "p";
        } else if (computerSelection == "Scissors") {
            console.log("Draw.");
            return "d";
        } else if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors.");
            return "c";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let ctr = 0; ctr < 5; ctr++) {
        playerSelection = prompt(`Round ${ctr + 1}! Rock, paper, or scissors?`)
        result = playRound(playerSelection, computerPlay());
        if (result == "c") {
            computerScore++;
        } else if (result == "p") {
            playerScore++;
        }
    }
    if (playerScore == computerScore) {
        console.log("We have a draw!");
    } else if (playerScore > computerScore) {
        console.log("You won!");
    } else {
        console.log("The computer won!");
    }
}
game();