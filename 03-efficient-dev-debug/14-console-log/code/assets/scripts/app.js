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
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  // Troubleshooting logical errors
  console.log("INPUT", enteredNumber, currentResult);

  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

// Link event listeners to the selected buttons defined in vendor.js
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
