// Global scope constant(s) & variable(s)
const defaultResult = 0;
let currentResult = defaultResult;

// A Function that fetch & returns the value of the HTML element <input> with an "id" of "input-number"
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// A Function that renders the mathematical expression & sum of two numbers
function add(num1, num2) {
  // Stores the user-input numeric value
  const enteredNumber = getUserNumberInput();

  // Stores the mathematical expression using template literal strings
  const calcDescription = `${currentResult} + ${enteredNumber}`;

  // Calculate the sum
  currentResult = currentResult + enteredNumber;

  // Renders the mathematical expression & sum on their respective HTML element <h2>
  outputResult(currentResult, calcDescription);
}

// Hooks up an Event Listener for a "click" & calls the Function "add()"
addBtn.addEventListener("click", add);
