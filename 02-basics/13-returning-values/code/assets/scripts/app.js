// Global-scoped variable(s)
const defaultResult = 0;
let currentResult = defaultResult;

// A function that returns the sum of two numbers
function add(num1, num2) {
  // Local-scoped variable
  const result = num1 + num2;

  // Returns the sum stored in the local-scoped constant variable"result"
  return result;
}

// Calling the custom function add(); stores the sum in the variable "currentResult"
currentResult = add(1, 2);

// NOTE: The value of the variable "calculationDescription" is currently incorrect
let calculationDescription = `((${defaultResult} + 10) * 3) / 2 - 1`;
outputResult(currentResult, calculationDescription);
