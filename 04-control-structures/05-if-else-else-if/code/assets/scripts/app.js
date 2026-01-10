// Global constant(s) & variable(s)
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Fetch user input from HTML document's <input> element
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Render mathematical expression as string in the HTML document
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;

  outputResult(currentResult, calcDescription); // Defined in vendor.js
}

// Detailed log of performed arithmetic operations
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  // Create a new object & store it into the array "logEntries"
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

// Arithmetic operations
function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

// Link event listeners to the selected buttons defined in vendor.js
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
