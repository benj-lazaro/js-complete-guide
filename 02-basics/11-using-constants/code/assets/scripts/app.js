// Declare a constant
const defaultResult = 0;

// Copy the value of the constant to initialize the new variable
let currentResult = defaultResult;

// Assign the result of the mathematical expression
currentResult = ((currentResult + 10) * 3) / 2 - 1;

// Assign the string representation of the mathematical expression
// Use string concatenation to insert the value of the constant "defaultResult"
let calculationDescription = "(" + defaultResult + " + 10) * 3 / 2 - 1";

// Pass both variables as argument values
outputResult(currentResult, calculationDescription);
