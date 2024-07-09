const prices = [10.99, 5.99, 3.99, 6.59];
console.log(prices);

// Sum up the price elements (with an initial value of 0) using .reduce()
// prevValue refers to the initial value
// curValue refers to the current element being processed

// const sum = prices.reduce((prevValue, curValue, currentIndex, prices) => {
//   return prevValue + curValue;
// }, 0);

// Single-line arrow function expression version
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum);
