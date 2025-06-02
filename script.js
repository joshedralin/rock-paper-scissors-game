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

function getHumanChoice(choice) {
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");

function playRound(humanChoice, computerChoice) {
    if(humanScore === 5 || computerScore === 5) return;

    if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            results.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
            // console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        } else if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) {
            results.textContent = `You lost! ${humanChoice} loses to ${computerChoice}`;
            // console.log(`You lost! ${humanChoice} loses to ${computerChoice}`);
            computerScore += 1;
        } else {
        // console.log("Tie!");
        results.textContent = 'Tie!';
    }
    updateScore();
}

const score = document.querySelector('#score');

function playGame(){
    humanScore = 0;
    computerScore = 0;
    updateScore();

    // if (humanScore === 5 || computerScore === 5) return;
}

function updateScore() {
    score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    const finalScore = document.createElement('p');
    if (humanScore === 5) {
        score.textContent = `Game over! You won!`;
        finalScore.textContent = `Final Score. You: ${humanScore} Computer: ${computerScore}`;
        document.body.appendChild(finalScore);
    } else if (computerScore === 5) {
        score.textContent = `Game Over! You lost!`;
        finalScore.textContent = `Final Score. You: ${humanScore} Computer: ${computerScore}`;
        document.body.appendChild(finalScore);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        switch(event.target.id) {
            case 'rock':
                playRound("rock", getComputerChoice());
                break;
            case 'paper':
                playRound("paper", getComputerChoice());
                break;
            case 'scissors':
                playRound("scissors", getComputerChoice());
                break;
        }
    });
});

// playGame();