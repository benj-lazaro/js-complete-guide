// Array of primitive values (numbers)
const prices = [10.99, 5.99, 3.99, 6.59];

// Get the sum of the elements w/ the starting value of 0
// const sum = prices.reduce((prevValue, curValue, idxValue, prices) => {
//   return prevValue + curValue;
// }, 0);

// Shortened version
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(`Prices: ${prices}`);
console.log(`Sum of prices: ${sum}`);
