const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  // Convert the user input into an integer then add to the current result's value
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, "");
}

// Hook up an Event Listener to the targeted HTML element defined in vendor.js
addBtn.addEventListener("click", add);
