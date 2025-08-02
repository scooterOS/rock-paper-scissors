let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;
let ROUND = 0;
let GAME_OVER = false;


function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function calculateResult(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) return "tie";
    if (humanChoice == "rock") return computerChoice == "scissors" ? "win" : "lose";
    if (humanChoice == "paper") return computerChoice == "rock" ? "win" : "lose";
    if (humanChoice == "scissors") return computerChoice == "paper" ? "win" : "lose";
    
    throw new Error("Could not determine result of the round.");
}

function submitResult(result, humanChoice, computerChoice) {

    const resultElem = document.querySelector(".result");

    switch (result) {
        case "win":
            const humanScoreElem = document.querySelector(".human-score");

            PLAYER_SCORE++;
            humanScoreElem.textContent = PLAYER_SCORE; 
            resultElem.textContent = `You won the round! ${humanChoice} beats ${computerChoice}.`;
            break;
        case "lose":
            const computerScoreElem = document.querySelector(".computer-score");

            COMPUTER_SCORE++;
            computerScoreElem.textContent = COMPUTER_SCORE;
            resultElem.textContent = `You lost the round. ${computerChoice} beats ${humanChoice}.`;
            break;
        case "tie":
            resultElem.textContent = `You tied the round... You both choice ${humanChoice}`;
            break;
        default:
            throw new Error(`Invalid result of the round: ${result}`);
    }
    ROUND++;
    if (ROUND >= 5) endGame();
}

function playRound(humanChoice) {
    
    if (GAME_OVER) return;

    const computerChoice = getComputerChoice();
    const result = calculateResult(humanChoice, computerChoice);

    submitResult(result, humanChoice, computerChoice);
}

function resetGame() {
    PLAYER_SCORE = 0;
    COMPUTER_SCORE = 0;
    ROUND = 0;
    GAME_OVER = false;

    const resultElem = document.querySelector(".result");
    resultElem.textContent = "";

    const humanScoreElem = document.querySelector(".human-score");
    humanScoreElem.textContent = "0";

    const computerScoreElem = document.querySelector(".computer-score");
    computerScoreElem.textContent = "0";
}

function endGame() {
    GAME_OVER = true;
    const resultElem = document.querySelector(".result");

    if (PLAYER_SCORE > COMPUTER_SCORE) {
        resultElem.textContent = "Congratulations! You won the game.";
    }
    else if (COMPUTER_SCORE > PLAYER_SCORE) {
        resultElem.textContent = "You lost the game. Better luck next time.";
    }
    else {
        resultElem.textContent = "You tied the game. You are ok in my book.";
    }

}

function setupGame() {
    const rockBtn = document.querySelector(".rock-btn");
    rockBtn.addEventListener("click", function(){ playRound("rock") });

    const paperBtn = document.querySelector(".paper-btn");
    paperBtn.addEventListener("click", function(){ playRound("paper") });

    const scissorsBtn = document.querySelector(".scissors-btn");
    scissorsBtn.addEventListener("click", function(){ playRound("scissors") });

    const newGameBtn = document.querySelector(".new-game-btn");
    newGameBtn.addEventListener("click", resetGame);
}

setupGame();