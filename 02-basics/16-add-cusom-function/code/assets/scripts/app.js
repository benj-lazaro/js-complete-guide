// Declare constant(s) & variable(s)
const defaultResult = 0;
let currentResult = defaultResult;

// Renders the sum of two numbers
function add(num1, num2) {
  const result = num1 + num2;
  alert(`The result is ${result}.`);
}

// Call the function w/ their respective argument values
add(1, 2);
add(5, 5);

// Store the mathematical expression's result
currentResult = ((currentResult + 10) * 3) / 2 - 1;

// Stores a template literal of the mathematical expression
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// Render result & mathematical expression on the browser
outputResult(currentResult, calculationDescription);
