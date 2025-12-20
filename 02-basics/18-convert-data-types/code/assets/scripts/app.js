// Global scope constant(s) & variable(s)
const defaultResult = 0;
let currentResult = defaultResult;

// A function that returns the sum of two numbers
function add(num1, num2) {
  // Properly add the current number value with the user input number
  currentResult = currentResult + parseInt(userInput.value);

  // Render the sum on the HTML document
  outputResult(currentResult, "");
}

// Hook up an Event Listener for a 'click' event; calls the function add()
addBtn.addEventListener("click", add);
