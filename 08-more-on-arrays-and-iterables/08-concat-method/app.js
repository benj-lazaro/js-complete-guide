const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// Concatenate elements of testResults with new elements then save to a new array storedResults
const storedResults = testResults.concat([3.99, 2]);

// To ensure a shallow-copy was made
testResults.push(5.9);

console.log(testResults, storedResults);
