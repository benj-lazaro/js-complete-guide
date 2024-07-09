const person = { name: "Max" };

// Display properties of the object
console.log(person);

// Create a new object and copy properties (and methods) of the source object person
const person2 = Object.assign({}, person);

// Modify the name property of the new object
person2.name = "Manuel";

// Changes did NOT get reflected back to the original / source object
console.log(person2);
