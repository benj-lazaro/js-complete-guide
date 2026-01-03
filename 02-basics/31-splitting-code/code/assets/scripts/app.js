// Declare constant(s) & variable(s)
const defaultResult = 0;
let currentResult = defaultResult;

// Fetch user input
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Sum of two numbers
function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;

  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

// Event listener(s)
addBtn.addEventListener("click", add);
