// Array of primitive values (numbers)
const prices = [10.99, 5.99, 3.99, 6.59];

// Sort elements in ascending order
const sortedPrices = prices.sort((a, b) => {
  console.log(a, b);
  if (a > b) {
    console.log("a > b");
    return 1; // a AFTER b
  } else if (a === b) {
    console.log("a === b");
    return 0; // a & b are equal
  } else {
    console.log("a < b");
    return -1; // a BEFORE b
  }
});

console.log(sortedPrices);

// Reverse sort elements
console.log(sortedPrices.reverse());
