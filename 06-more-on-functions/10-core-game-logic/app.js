const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

// Function expression that retrieves user input
const getPlayerChoice = function () {
  // Display selection with a default value of an empty string
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ""
  ).toUpperCase();

  // Validate user input
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

// Function expression allows the computer to make a choice
const getComputerChoice = function () {
  // Simulate randomness
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// Function expression to determine the winnder
const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === SCISSORS && pChoice === ROCK) ||
    (cChoice === PAPER && pChoice === SCISSORS)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    // Prevents another request for user input
    return;
  }

  gameIsRunning = true;
  console.log("Gaming is starting...");
  const playerChoice = getPlayerChoice();

  const computerChoice = getComputerChoice();
  console.log(`Player choose: ${playerChoice}`);
  console.log(`Computer choose: ${computerChoice}`);

  const winner = getWinner(computerChoice, playerChoice);
  console.log(`Winner is: ${winner}`);
});
