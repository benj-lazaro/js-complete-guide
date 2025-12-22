// Global scope constant(s) & variable(s)
const defaultResult = 0;
let currentResult = defaultResult;

// Function that fetches user input from the HTML document
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Function that renders the mathematical operation on the HTML document
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// Function that adds two numbers; renders the mathematical expression & result
function add(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
}

// Function that substracts two numbers; renders the mathematical expression & result
function subtract(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

// Function that multiplies two numbers; renders the mathematical expression & result
function multiply(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

// Function that divides two numbers; renders the mathematical expression & result
function divide(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

// Hook up an Event Listener for "click" for each targeted HTML element & their respective callback Functions
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
