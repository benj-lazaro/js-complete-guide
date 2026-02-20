// Array of primitive values (numbers)
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

console.log(prices);

prices.forEach((price, index, prices) => {
  taxAdjustedPrices.push(price * (1 + tax));
});

console.log(taxAdjustedPrices);
