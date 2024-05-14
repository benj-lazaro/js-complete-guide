const prices = [10.99, 5.99, 3.99, 6.59];
console.log(prices);

// Original code
// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });

// Single-line arrow function expression
const filteredArray = prices.filter((price) => price > 6);

console.log(filteredArray);
