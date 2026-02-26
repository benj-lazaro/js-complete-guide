// Task #1
const numbers = [5, 10, 15, 20, 25, 30];
console.log(numbers);

// Filter elements of the array that are greater than 5
const filteredNumbers = numbers.filter((number) => number > 5);
console.log(filteredNumbers);

// Map elements as value to an object's property "num"
// const mappedNumbers = numbers.map((number) => {
//   const numberObj = { num: number };
//   return numberObj;
// });

// Map elements as value to an object's property "num" (short version)
const mappedNumbers = numbers.map((number) => ({ num: number }));
console.log(mappedNumbers);

// Reduce elements of the array into a single product (multiplication)
const product = numbers.reduce(
  (prevValue, curValue) => prevValue * curValue,
  1,
);
console.log(product);

// Task #2
// A rest operator used in the parameter list
const findMax = (...args) => {
  let currentValue = args[0];

  for (const number of args) {
    if (number > currentValue) {
      currentValue = number;
    }
  }
  return currentValue;
};

// A spread operator used in the arguement list
console.log(findMax(...numbers));
console.log("----------");

// Task #3
const findMinMax = (...args) => {
  return [Math.max(...args), Math.min(...args)];
};
const [high, low] = findMinMax(...numbers);
console.log(`Highest value: ${high}, Lowest value: ${low}`);

// Author's solution
// const findMinMax = (...args) => {
//   let maxValue = args[0];
//   let minValue = args[0];

//   for (const number of args) {
//     if (number > maxValue) {
//       maxValue = number;
//     }
//     if (number < minValue) {
//       minValue = number;
//     }
//     return [maxValue, minValue];
//   }
// };

// Task #4
const duplicateNumbers = [1, 1, 2, 3, 4, 5, 10, 30, 10, 30, 10, 10];
const uniqueNumbers = new Set(duplicateNumbers);
console.log(uniqueNumbers);
