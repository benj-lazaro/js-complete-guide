function getMin(numbers) {
  // Check if the array is empty
  if (!numbers.length) {
    throw new Error("Should NOT be an empty array!");
  }

  // Assign the 1st array element to the variable
  let currentMinimum = numbers[0];

  // Iterate through the elements of the array
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] < currentMinimum) {
      currentMinimum = numbers[index];
    }
  }

  // Return the minimum number
  return currentMinimum;
}

// Test Case
const testNumbers = [3, 1, 2];
let minimum = getMin(testNumbers);
console.log(minimum);

const testData1 = [3];
minimum = getMin(testData1);
console.log(minimum);

const testData2 = [10, -5, 100, 99, -2];
minimum = getMin(testData2);
console.log(minimum);

const testData3 = [];
minimum = getMin(testData3);
console.log(minimum);
