// RULES:
// Rock(0) beats Scissors(2)
// Scissors(2) beats Paper(1)
// Paper(1) beats Rock(0)

// Reset scores to zero
let humanScore = 0;
let computerScore = 0;
console.log("Good luck, Player 1");

function playRound(rounds) {

    for (i = 1; i <= rounds; i++) {

        // Get human choice
        let humanChoice;
        function getHumanChoice() {
            humanChoice = prompt("Player 1, Enter your choice: Rock(0), Paper(1) or Scissor(2)");
        }

        // Get Computer Choice
        function getComputerChoice () {
            max = 3;
            return Math.floor(Math.random() * max);
        }
        let computerChoice = parseInt(getComputerChoice());
        
        // Print Player 1 choice
        getHumanChoice();
        console.log(`YOU: ${humanChoice}`);

        // Print Player 2 choice
        if (computerChoice === 1) {
            console.log("Player 2: Paper")
            
        } else if (computerChoice === 2) {
            console.log("Player 2: Scissor");
            
        } else {
            console.log("Player 2: Rock");
        }

        // Game
        if (humanChoice == 0 & computerChoice == 0) {
            console.log("Tie");
            console.log(`The Score is ${humanScore}:${computerScore}`)
        } else if (humanChoice == 1 & computerChoice == 0) {
            console.log("You win! Paper beats rock");
            humanScore++;
            console.log(`The Score is ${humanScore}:${computerScore}`)
        } else if (humanChoice == 2 & computerChoice == 0) {
            console.log("You lose!");
            computerScore++;
            console.log(`The Score is ${humanScore}:${computerScore}`)
        } else if (humanChoice == 0 & computerChoice == 1) {
            console.log("You lose");
            computerScore++;
            console.log(`The Score is ${humanScore}:${computerScore}`)
        } else if (humanChoice == 1 & computerChoice == 1) {
            console.log("Tie");
            console.log(`The Score is ${humanScore}:${computerScore}`)
        } else if (humanChoice == 2 & computerChoice == 1) {
            console.log("You win! Scissor beats Paper");
            humanScore++;
            console.log(`The Score is ${humanScore}:${computerScore}`)
        } else if (humanChoice == 0 & computerChoice == 2) {
            console.log("You win! Rock beats Scissor");
            humanScore++;
            console.log(`The Score is ${humanScore}:${computerScore}`)
        } else if (humanChoice == 1 & computerChoice == 2) {
            console.log("You lose");
            computerScore++;
            console.log(`The Score is ${humanScore}:${computerScore}`)
        } else if (humanChoice == 2 & computerChoice == 2) {
            console.log("Tie");
            console.log(`The Score is ${humanScore}:${computerScore}`)
        } else {
            console.log("Please try again");
            console.log(`The Score is ${humanScore}:${computerScore}`)
        }
    }

    // Conclusion
    if (humanScore < computerScore) {
        console.log("PLAYER 2 WINS")
    } else {
        console.log("YOU WIN")
    }
}

function playGame() {
    playRound(5);
}

playGame();