// Setup array w/ pre-defined items
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
console.log(testResults);
console.log("----------");

// Create a "shallow copy" of the array "testResults"
const storedResults = testResults.slice();
console.log(storedResults, testResults);
console.log("----------");

// Push a new element into the original array
testResults.push(5.91);
console.log(storedResults, testResults);
console.log("----------");

// Copies the two (2) elements that starts at index 0, ends at index 2 (excluded)
const portionResults = testResults.slice(0, 2);
console.log(portionResults);
console.log(testResults);
console.log("----------");

// Copies the last 2nd & last elements of the original array
const lastResults = testResults.slice(-3, -1);
console.log(lastResults);
console.log(testResults);
console.log("----------");

const thirdToEndResult = testResults.slice(2);
console.log(thirdToEndResult);
console.log(testResults);
console.log("----------");
