function getHumanChoice() {
    // prompt human for choice
    humanChoice = prompt("Enter your choice:\n(rock, paper, scissors)").toLowerCase();

    // return choice if its valid
    if (["rock", "paper", "scissors"].includes(humanChoice)) return humanChoice;

    // otherwise, inform the human of their invalid choice and try again
    alert(`Error: ${humanChoice} is not an option`);
    return getHumanChoice();
}

function getComputerChoice() {

    computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
    throw new Error("The computer couldn't make up its mind.");
}

function calculateResult(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) return "tie";
    if (humanChoice == "rock") return computerChoice == "scissors" ? "win" : "lose";
    if (humanChoice == "paper") return computerChoice == "rock" ? "win" : "lose";
    if (humanChoice == "scissors") return computerChoice == "paper" ? "win" : "lose";
    
    throw new Error("Could not determine result of the round.")
}

function informHuman(result, computerChoice) {
    switch (result) {
        case "win":
            return alert("You won the round!\n" + "Computer's choice: " + computerChoice);
        case "lose":
            return alert("You lost the round!\n" + "Computer's choice: " + computerChoice);
        case "tie":
            return alert("You tied the round...\n" + "Computer's choice: " + computerChoice);
    }
    throw new Error("Invalid result of the round.")
}

function playRound() {
    // get player's choice
    const humanChoice = getHumanChoice();

    // get computer's choice
    const computerChoice = getComputerChoice();

    // calculate the outcome
    const result = calculateResult(humanChoice, computerChoice);

    // inform human of the outcome
    informHuman(result, computerChoice);

    // return result of the round: win, lose, tie
    return result;
}

function showResults(playerScore, computerScore) {
    alert(`Final Score:\nHuman = ${playerScore}\nComputer = ${computerScore}`);
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    
    // play 5 total games of rock-paper-scissors
    for (let i = 0; i < 5; i++) {
        var result = playRound();

        // add to the winner's score
        playerScore += result == "win";
        computerScore += result == "lose";
    }
    showResults(playerScore, computerScore);
}

playGame();