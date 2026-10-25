// Best case: single array element expressed as O(1)
// Worst case: more than 1 array element, expressed as O(n - 1) or O(n)
function getMin(numbers) {
  // Check if the array is empty
  if (!numbers.length) {
    throw new Error("Should NOT be an empty array!");
  }

  // Assign the 1st array element to the variable
  let currentMinimum = numbers[0];
  console.log("Execution: Initialize");

  // Iterate through the elements of the array
  for (let index = 1; index < numbers.length; index++) {
    console.log("Execution: For loop");
    if (numbers[index] < currentMinimum) {
      currentMinimum = numbers[index];
    }
  }

  // Return the minimum number
  console.log("Execution: Return");
  return currentMinimum;
}

// Best case: ordered array elements expressed as O(n^2)
// Worst case: reverse ordered array elements, still expressed as O(n^2)
// Average case: input NOT known ahead of time, still expressed as O(n^2)
function getMin2(numbers) {
  // Check if the array is empty
  if (!numbers.length) {
    throw new Error("Should NOT be an empty array!");
  }

  // Manual sorting algorithm
  // Iterates through ALL of the elements
  for (let outerIndex = 0; outerIndex < numbers.length; outerIndex++) {
    let outerElement = numbers[outerIndex];

    // Iterates through ALL of the elements the 2nd time
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
  } // T(time) = n (1st for loop) * n (2nd for loop) => Quadratic Time Complexity => O(n^2)

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
