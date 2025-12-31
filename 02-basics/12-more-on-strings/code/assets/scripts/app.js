// Declare a constant
const defaultResult = 0;

// Copy the value of the constant to initialize the new variable
let currentResult = defaultResult;

// Assign the result of the mathematical expression
currentResult = ((currentResult + 10) * 3) / 2 - 1;

// Store a template literal of the previous line's mathematical expression
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// To demonstrate escape characters in a string
// let errorMessage = "An error \n" + "occurred!";

// Tenatively pass "errorMesage" as an argument value
// outputResult(currentResult, errorMessage);
outputResult(currentResult, calculationDescription);
