

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper or scissors:");
    return choice ? choice.toLocaleLowerCase() : "";
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return;
        }
        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')

        ) {
            humanScore++;

            console.log(`You win this round! ${humanChoice} beats ${computerChoice}`)
        } else {
            computerScore++;

            console.log(`You lose this round ${computerChoice} beats ${humanChoice}`)
        }
    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Current Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
    console.log(`Victory! You beat the computer ${humanScore} to ${computerScore}.`);
  } else if (computerScore > humanScore) {
    console.log(`Defeat! The computer beat you ${computerScore} to ${humanScore}.`);
  } else {
    console.log("The game ended in a draw!");
  }
}

playGame();