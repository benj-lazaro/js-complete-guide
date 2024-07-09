const defaultResult = 0;
let currentResult = defaultResult;

// Log the mathematical operations performed
let logEntries = [];

// Capture user input from <input> tag
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Render log of mathematical operation on the HTML document
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // Imported from vendor.js
}

// Mathematical operations
function add(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);

  // Create an object using object initialzer / literal syntax
  const logEntry = {
    operation: "ADD",
    prevResult: initialResult,
    userInput: enteredNumber,
    result: currentResult,
  };
  console.log(logEntry);

  // Push an item (user input) into the array
  logEntries.push(enteredNumber);

  // Display contents of the array
  console.log(logEntries);
}

function subtract(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

// Link Event Listeners to targeted HTML elements (in vendor.js) & their respective callback functions
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
