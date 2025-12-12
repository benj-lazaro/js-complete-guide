// Constant stores a default value that NEVER changes throughout the code's runtime
const defaultResult = 0;

// Stores the value of a constant into a variable
let currentResult = defaultResult;

// Evaluates the mathematical expression and stores it into the variable
currentResult = ((currentResult + 10) * 3) / 2 - 1;

// A variable stores the string representation of the mathematical expression
let calculationDescription = "((" + defaultResult + " + 10) * 3) / 2 - 1";

// Calls the function outputResult() to render the values of variables on the HTML document
outputResult(currentResult, calculationDescription);
