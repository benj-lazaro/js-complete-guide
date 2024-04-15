const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

// Arrow function expression that retrieves user input
const getPlayerChoice = () => {
  // Display selection with a default value of an empty string
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ""
  ).toUpperCase();

  // Validates user input
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

// Arrow function expression that allows the computer to make a choice
const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// Arrow function expresssion that determines who won the game
const getWinner = (cChoice, pChoice) =>
  // A single-line ternary expression of the winner logic
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === SCISSORS && pChoice === ROCK) ||
      (cChoice === PAPER && pChoice === SCISSORS)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// Arrow function expression that capture the 'click' event for the "Start Game" button
startGameBtn.addEventListener("click", () => {
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
