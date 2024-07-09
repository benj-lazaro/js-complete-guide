const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  // Add userInput's value with the value stored in the global variable currentResult
  // userInput is defined in vendor.js
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
}

// Hook up an Event Listener to the targeted HTML element defined in vendor.js
addBtn.addEventListener("click", add);
