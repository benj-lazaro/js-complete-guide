const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
const storedResults = testResults.concat([3.99, 2]);

console.log(testResults, storedResults);

// Search the index value of the array element 1.5 from the left-side
console.log(testResults.indexOf(1.5));

// Search the index value of the array element 1.5 from the end / right side of the array
console.log(testResults.lastIndexOf(1.5));

// Method gotcha: reference value
const personData = [{ name: "Max" }, { name: "Manuel" }];
console.log(personData.indexOf({ name: "Max" }));
console.log(personData.lastIndexOf({ name: "Max" }));
