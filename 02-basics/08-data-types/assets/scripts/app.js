let currentResult = 0;

// Assign the mathematical expression as a string to the variable
let calculationDescription = "((" + currentResult + " + 10) * 3) / 2 - 1";

// Overwrite the initial value of the variable with the result of the mathematical expression
currentResult = ((currentResult + 10) * 3) / 2 - 1;

// Invoke outputResult() function in vendor.js
// Pass the values of currentResult and calculationDescription as arguments
outputResult(currentResult, calculationDescription);
