// Define an object
let person = { name: "Max" };

// Define a new WeakMap & add a key-value pair into it wherein key MUST be an object
const personData = new WeakMap();
personData.set(person, "Extra info!");
console.log(personData);

// After some operations, the object needs to garbage collected from heap memory
person = null;
console.log(personData); // Object may still be present BUT will be garbage collected later
