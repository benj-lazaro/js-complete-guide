// Declare a variable
let currentResult = 0;

// Assign a string value based on the next line's mathematical expression
// Use string concatenation "+" to insert the variable "currentResult" into the string
let calculationDescription = "(" + currentResult + " + 10) * 3 / 2 - 1";

// Assign the result of the mathematical expression back to the variable
// Effectively overwrites the initial value of 0
currentResult = ((currentResult + 10) * 3) / 2 - 1;

// Pass both variables as argument values
outputResult(currentResult, calculationDescription);
