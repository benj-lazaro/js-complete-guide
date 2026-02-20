// Array of primitive values (numbers)
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];

// Search for 1st instance of element 1.5
console.log(testResults.indexOf(1.5));

// Search for last instance of element 1.5
console.log(testResults.lastIndexOf(1.5));

// Array of reference values (objects)
// Reference address of the object element w/in the array is different
// From the reference address of the object passed as argument value
const personData = [{ name: "Max" }, { name: "Manuel" }];
console.log(personData.indexOf({ name: "Max" }));
