// Declare constant(s) & variable(s)
const defaultResult = 0;
let currentResult = defaultResult;

// Renders the sum of two numbers
function add() {
  currentResult = currentResult + userInput.value;

  outputResult(currentResult, "");
}

// Execute the function "add()" indirectly
addBtn.addEventListener("click", add);

// Stores a template literal of the mathematical expression
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
