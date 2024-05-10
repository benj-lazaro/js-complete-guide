const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// Use forEach() to apply tax to each price

// Push tax adjusted price elements into the new array
// prices.forEach((price, idx, prices) => {
//   taxAdjustedPrices.push(price * (1 + tax));
// });

// Push tax adjusted price objects into the new array
prices.forEach((price, idx, prices) => {
  const priceObj = {
    index: idx,
    taxAdjPrice: price * (1 + tax),
  };
  taxAdjustedPrices.push(priceObj);
});

console.log(prices);
console.log(taxAdjustedPrices);
