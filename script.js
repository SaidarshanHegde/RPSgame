function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3); // 0, 1, or 2
      
        if (randomNumber === 0) {
          return "rock";
        } else if (randomNumber === 1) {
          return "paper";
        } else {
          return "scissors";
        }
    }

    function getHumanChoice() {
        let choice = prompt("Enter rock, paper, or scissors:");
        return choice.toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    }
  
    for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Round ${i + 1} score: You ${humanScore} - Computer ${computerScore}`);
    }
  

    if (humanScore > computerScore) {
      console.log("You won the game!");
    } else if (computerScore > humanScore) {
      console.log("You lost the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  playGame();

  console.log("Refersh the page to play again..!")