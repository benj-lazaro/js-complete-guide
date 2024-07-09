// Global-scope variables
const defaultResult = 0;
let currentResult = defaultResult;

// Define a custom function that adds two numbers
function add(num1, num2) {
  // Local-scope variable
  const result = num1 + num2;

  // Returns the value back to the express that called the function
  return result;
}

// Call the custom function
currentResult = add(1, 2);

// NOTE: value of calculationDescription is NOT corrent for the moment
let calculationDescription = `((${defaultResult} + 10) * 3) / 2 - 1`;

outputResult(currentResult, calculationDescription);
