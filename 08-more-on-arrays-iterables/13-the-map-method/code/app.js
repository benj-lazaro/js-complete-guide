// Array of primitive values (numbers)
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, index, prices) => {
  const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices); // Remains unchanged
console.log(taxAdjustedPrices);
