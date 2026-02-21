// Array of primitive values (numbers)
const prices = [10.99, 5.99, 3.99, 6.59];

// Filter elements that are ONLY greater than 6
const filteredPrices = prices.filter((price, index, prices) => {
  return price > 6;
});

console.log(`prices: ${prices}`);
console.log(`filtered prices: ${filteredPrices}`);
