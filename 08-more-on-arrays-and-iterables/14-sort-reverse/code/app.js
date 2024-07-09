const prices = [10.99, 5.99, 3.99, 6.59];

// Sort array element in place
// NOTE: Elements are converted to string
// For strings, only the first character is compared by default, hence it's NOT "10" > "3" BUT "1" < "3"
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices);

// Reverse the order of the previously sorted array elements
console.log(sortedPrices.reverse());
