const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER";
const RESULT_COMPUTER_WINS = "COMPUTER";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    "",
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We choose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }

  return selection;
};

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

// Arrow function w/ a single-line ternary expression
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
      ? RESULT_PLAYER_WINS
      : RESULT_COMPUTER_WINS;

// Anonymous function defined as an in-place callback function
startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    console.log(gameIsRunning);
    return;
  }

  // Disables the "Start Game!" button
  gameIsRunning = true;
  console.log("Game is starting...");

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;

  if (winner === RESULT_DRAW) {
    message = message + "had a draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won.";
  } else {
    message = message + "lost.";
  }

  alert(message);

  // Enables the "Start Game!" button
  gameIsRunning = false;
});

// NOT related to the game

// Callback function as an argument value
const sumUp = (resultHandler, a, b, ...numbers) => {
  // Inner function
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const number of numbers) {
    sum += validateNumber(number);
  }

  // Execute callback function
  resultHandler(sum);
};

const showResult = (result) => {
  alert("The result after adding all numbers is " + result);
};

sumUp(showResult, 1, 5, "Hello", -3, 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);

// Keyword "arguments"
const subtractUp = function () {
  let difference = 0;

  for (const number of arguments) {
    difference -= number;
  }
  return difference;
};

console.log(subtractUp(1, 10, 15, 20));
