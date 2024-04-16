const startGameBtn = document.getElementById("start-game-btn");

// Global constant variable(s)
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

// Global variable(s)
let gameIsRunning = false;

// Arrow function expression that retrieves user input
const getPlayerChoice = () => {
  // Display selection of choices with a default value of an empty string
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ""
  ).toUpperCase();

  // Validates user input & assign a default value when it fails
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${ROCK} for you!`);
    // return DEFAULT_USER_CHOICE;
    return;
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
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  // A single-line ternary expression for the winner logic
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === SCISSORS && pChoice === ROCK) ||
      (cChoice === PAPER && pChoice === SCISSORS)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// Arrow function expression that captures the 'click' event & executes the callback arrow function
startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return; // Prevents repeat request for user input
  }

  gameIsRunning = true;

  console.log("Gaming is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice); // Prevents other invalid playerChoice values from being accepted
  }

  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message += "had a draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message += "won.";
  } else {
    message += "lost.";
  }

  alert(message);
  gameIsRunning = false;
});

// NOT related to the project; just a demonstration of the rest parameters & operator ...

const sumUp = (...numbers) => {
  let sum = 0;

  // Add each item from the numbers array to the value stored in variable sum
  for (const num of numbers) {
    sum += num;
  }

  return sum;
};

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));

// Demonstration of the invisible / implicit arguments variable
function subtractUp() {
  let difference = 0;

  // Use of implicit "arguments" variable is NOT recommended
  for (const num of arguments) {
    difference -= num;
  }

  return difference;
}

console.log(subtractUp(1, 5, 10, -3, 6, 10));
