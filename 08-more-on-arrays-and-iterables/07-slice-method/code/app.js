const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// Create a new shallow-copy of testResults
const storedResults = testResults.slice();

// Push a new element unto testResults
testResults.push(5.91);

// Copy a slice of the testResults from index 0 up to 2; excluding content at index 2
const slicedResults = testResults.slice(0, 2);

// Display content of the arrays
console.log(testResults, storedResults, slicedResults);
