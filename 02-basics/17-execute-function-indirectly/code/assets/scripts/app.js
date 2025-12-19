// Global scope constant(s) & variable(s)
const defaultResult = 0;
let currentResult = defaultResult;

// A function that returns the sum of two numbers
function add(num1, num2) {
  currentResult = currentResult + userInput.value;

  outputResult(currentResult, "");
}

// Hook up an Event Listener tp the constant "addBtn" (defined in vendor.js)
addBtn.addEventListener("click", add);
