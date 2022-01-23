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

function clicked(e) {
    e.target.classList.add("clicked");
}
function removeClicked(e) {
    e.target.classList.remove("clicked");
}

function capitalizeFirstChar(str) {
    let firstChar = str.substr(0, 1);
    firstChar = firstChar.toUpperCase();
    let noFirstChar = str.substr(1);
    str = firstChar + noFirstChar;
    return str;
}
function finishGame(result) {
    if (result == 'd') {
        gameTextContainer.textContent = 'Game finished, we have a draw!';
    } else if (result == 'p') {
        gameTextContainer.textContent = 'Game finished, you win!';
    } else {
        gameTextContainer.textContent = 'Game finished, Walrus wins!';
    }
    setTimeout(function() {
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Play again!'
        restartButton.style.cssText = 'height: 100px; width: 200px; font-size: 40px; font-weight: bold; background-color: lightblue;'
        gameTextContainer.textContent = '';
        gameTextContainer.appendChild(restartButton);
        restartButton.addEventListener('click', function() {
            document.location.reload()
        });
    }, 3000);
};

function game(e) {
    console.log(e.target.id);
    let playerChoice = "None";
    if (e.target.id == "paper-button") {
        playerChoice = "paper";
    } else if (e.target.id == "rock-button") {
        playerChoice = "rock";
    } else {
        playerChoice = "scissors";
    }
    let computerChoice = computerPlay();
    let result = playRound(playerChoice, computerChoice);
    let tempString = ''
    if (result == "c") {
        computerScore++;
        tempString = 'Walrus wins this round!'
    } else if (result == "p") {
        playerScore++;
        tempString = 'You win this round!'
    } else {
        tempString = 'This round is a draw!'
    }
    gameTextContainer.textContent = `Walrus has chosen ${computerChoice}! ${tempString}`;
    if ((playerScore == 5) || (computerScore == 5)) {
        const buttons = Array.from(document.querySelectorAll('.button-image'));
        buttons.forEach(button => button.removeEventListener('click', game));
        if (playerScore == computerScore) {
            console.log("Game finished, we have a draw!");
            setTimeout(function() {
                finishGame('d');
            }, 3000)
        } else if (playerScore > computerScore) {
            console.log("Game finished, you won!");
            setTimeout(function() {
                finishGame('p');
            }, 3000)
        } else {
            console.log("Game finished, the computer won!");
            setTimeout(function() {
                finishGame('c');
            }, 3000)
        }
    }
    let playerScoreText = document.querySelector('#player.score-number');
    playerScoreText.textContent = playerScore;
    let computerScoreText = document.querySelector('#computer.score-number');
    computerScoreText.textContent = computerScore;
}
function resetScore() {
    playerScore = 0;
    computerScore = 0;
}
function startGame(e) {
    playerScore = 0;
    computerScore = 0;
    startButton.remove();
    gameTextContainer.textContent = 'Choose from the 3 buttons below!'
    const buttons = Array.from(document.querySelectorAll('.button-image'));
    buttons.forEach(button => button.addEventListener('click', clicked));
    buttons.forEach(button => button.addEventListener('transitionend', removeClicked));
    buttons.forEach(button => button.addEventListener('click', game));
}

let playerScore = 0;
let computerScore = 0;
const gameTextContainer = document.querySelector('.game-txt-container');
const startButton = document.createElement('button');
startButton.textContent = 'Start!'
startButton.style.cssText = 'height: 100px; width: 200px; font-size: 50px; font-weight: bold; background-color: lightblue;'
gameTextContainer.appendChild(startButton);
startButton.addEventListener('click', startGame);




