// NOT using recursion
function powerOf1(numValue, numOfTimes) {
  let result = 1;

  for (let i = 0; i < numOfTimes; i++) {
    result = result * numValue;
  }

  return result;
}

console.log(powerOf1(2, 3)); // 2 * 2 * 2 = 8

// Using recursion
function powerOf(numValue, numOfTimes) {
  // Readable version
  // if (numOfTimes === 1) {
  //   return numValue;
  // }

  // return numValue * powerOf(numValue, numOfTimes - 1);

  // Shorter version
  return numOfTimes === 1
    ? numValue
    : numValue * powerOf(numValue, numOfTimes - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2 = 8
