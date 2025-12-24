// Global scope constant(s) & variable(s)
const defaultResult = 0;
let currentResult = defaultResult;

// Fetch & conver user-input value into an integer
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Render result and mathematical expression  on the HTML document
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // Imported from vendor.js
}

// Returns the sum of two numbers
function add(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
}

// Returns the difference of two numbers
function subtract(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

// Returns the product of two numbers
function multiply(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

// Returns the quotient of two numbers
function divide(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

// Hookup a 'click' event listener & their corresponding callback functions on selected HTML elements
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
