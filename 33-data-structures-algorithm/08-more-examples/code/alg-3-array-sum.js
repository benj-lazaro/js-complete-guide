function sumUp(numbers) {
  let sum = 0; // Executes once

  // Executes on the entirety of the input size "n"
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }

  return sum; // Executes once
} // Linear Time Complexity => O(n)

const array = [1, 2, 3];
console.log(sumUp(array));
