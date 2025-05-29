function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors");
    let fixedChoice = choice.toLowerCase();

    if (fixedChoice === "rock") {
        return "rock";
    } else if (fixedChoice === "paper") {
        return "paper";
    } else if (fixedChoice === "scissors") {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }
    if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) {
            console.log(`You lost! ${humanChoice} loses to ${computerChoice}`);
            computerScore += 1;
        }
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame(){
    // let humanScore = 0;
    // let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Game over! Final score:");
    console.log(`You: ${humanScore} Computer: ${computerScore}`);
}

playGame();