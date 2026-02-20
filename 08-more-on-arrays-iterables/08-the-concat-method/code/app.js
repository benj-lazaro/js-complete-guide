// Setup array w/ pre-defined items
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
console.log(testResults);

// Pulls out elements from testResults & argument values into a new array
const storedResults = testResults.concat([3.99, 2]);
console.log(storedResults);

// Add a new element into testResults
testResults.push(5.91);

// New element in testResults is NOT reflected on storedResults
console.log(testResults, storedResults);
