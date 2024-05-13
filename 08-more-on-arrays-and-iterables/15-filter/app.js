const prices = [10.99, 5.99, 3.99, 6.59];
console.log(prices);

// Create a shallow copy of the array populated with filtered elements
// Element whose value is greater than 6.0
const filteredArray = prices.filter((price, index, prices) => {
  return price > 6; // If true then add element to the new array
});

console.log(filteredArray);
