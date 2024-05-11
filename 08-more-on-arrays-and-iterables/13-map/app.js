const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// Create a new array, populated with updated elements
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = {
    index: idx,
    taxAdjPrice: price * (1 + tax),
  };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);
