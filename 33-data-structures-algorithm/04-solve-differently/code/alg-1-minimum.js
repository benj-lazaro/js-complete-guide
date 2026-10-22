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

function getMin2(numbers) {
  // Check if the array is empty
  if (!numbers.length) {
    throw new Error("Should NOT be an empty array!");
  }

  // Manual sorting algorithm
  for (let outerIndex = 0; outerIndex < numbers.length; outerIndex++) {
    let outerElement = numbers[outerIndex];

    for (
      let innerIndex = outerIndex + 1;
      innerIndex < numbers.length;
      innerIndex++
    ) {
      let innerElement = numbers[innerIndex];

      if (outerElement > innerElement) {
        // Swap
        numbers[outerIndex] = innerElement;
        numbers[innerIndex] = outerElement;

        // Update the local variables
        outerElement = numbers[outerIndex];
        innerElement = numbers[innerIndex];
      }
    }
  }

  return numbers[0];
}

// Test Case
// const testNumbers = [3, 1, 2];
// let minimum = getMin(testNumbers);
// console.log(minimum);

// const testData1 = [3];
// minimum = getMin(testData1);
// console.log(minimum);

// const testData2 = [10, -5, 100, 99, -2];
// minimum = getMin(testData2);
// console.log(minimum);

// const testData3 = [];
// minimum = getMin(testData3);
// console.log(minimum);

const testData4 = [2, 1, -5, 10, 10, -10];
minimum = getMin2(testData4);
console.log(minimum);
