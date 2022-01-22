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
    
    for (let ctr = 0; ctr < 5; ctr++) {
        playerSelection = prompt(`Round ${ctr + 1}! Rock, paper, or scissors?`)
        result = playRound(playerSelection, computerPlay());
        if (result == "c") {
            computerScore++;
        } else if (result == "p") {
            playerScore++;
        }
    }
    
}

function clicked(e) {
    // console.log(e);
    e.target.classList.add("clicked");
}
function removeClicked(e) {
    e.target.classList.remove("clicked");
}

function displayIntroduction(textContainer) {
    let texts = ["You are going to play Rock Paper Scissors with this Walrus!", "You are going to play for 5 games.", "Good luck!"];
    for (let i = 0; i < texts.length; i++) {
        setTimeout(function() {
            textContainer.textContent = texts[i];
        }, 3000)
    }
}

const buttons = Array.from(document.querySelectorAll('.button-image'));
buttons.forEach(button => button.addEventListener('click', clicked));
buttons.forEach(button => button.addEventListener('transitionend', removeClicked));
const gameTextContainer = document.querySelector('.game-txt-container');
const startButton = document.createElement('button');
startButton.textContent = 'Start!'
startButton.style.cssText = 'height: 100px; width: 200px; font-size: 50px; font-weight: bold; background-color: lightblue;'
gameTextContainer.appendChild(startButton);
startButton.addEventListener('click', function() {
    startButton.remove();
    displayIntroduction(gameTextContainer);
});

let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => button.addEventListener('click', function(e) {
    console.log(e.target.id);
    let playerChoice = "None";
    if (e.target.id == "paper-button") {
        playerChoice = "paper";
    } else if (e.target.id == "rock-button") {
        playerChoice = "rock";
    } else {
        playerChoice = "scissors";
    }
    let result = playRound(playerChoice, computerPlay());
    if (result == "c") {
        computerScore++;
    } else if (result == "p") {
        playerScore++;
    }

    if ((playerScore == computerScore) && (playerScore == 5)) {
        console.log("Game finished, we have a draw!");
    } else if (playerScore > computerScore) {
        console.log("Game finished, you won!");
    } else {
        console.log("Game finished, the computer won!");
    }
}));


// gameTextContainer.textContent = 'Hello!';
// setTimeout(function(){
//     gameTextContainer.textContent = 'World!';
// }, 2000)

