// Global-scope variables
const defaultResult = 0;
let currentResult = defaultResult;

// Define a custom function that adds two numbers
function add(num1, num2) {
  // Local-scope variable
  const result = num1 + num2;

  // Outputs the value to the browser as a pop-up
  alert(`The result is ${result}`);
}

// Call the custom function
add(1, 2);
add(5, 5);

currentResult = ((currentResult + 10) * 3) / 2 - 1;
let calculationDescription = `((${defaultResult} + 10) * 3) / 2 - 1`;

outputResult(currentResult, calculationDescription);
