// Default value NEVER changes throughout the execution of the code
const defaultResult = 0;

// Copy the value of defaultResult to currentResult
let currentResult = defaultResult;

// Overwrite initial value of currentResult with the result of the mathematical expression
currentResult = ((currentResult + 10) * 3) / 2 - 1;

// Backticks offer flexibility over the pair of single/double quotes
let calculationDescription = `((${defaultResult} + 10) * 3) / 2 - 1`;

// Call outputResult() function from vendor.js to render value of variables in HTML
outputResult(currentResult, calculationDescription);
