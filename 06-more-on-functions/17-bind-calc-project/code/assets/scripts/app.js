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

// Logs mathematical opeartion performed
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    userInput: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry.userInput);
  console.log(logEntries);
  console.log(logEntry);
  console.log(
    `You performed a ${logEntry.operation} with the value of ${logEntry.userInput} that yielded the result of ${logEntry.result}`
  );
}

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;

  if (operation === "ADD") {
    currentResult += enteredNumber;
    operator = "+";
  } else if (operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator = "+";
  } else if (operation === "MULTIPLY") {
    currentResult *= currentResult * enteredNumber;
    operator = "*";
  } else {
    currentResult /= enteredNumber;
    operator = "/";
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

// Using .bind() method on callback functions
addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
