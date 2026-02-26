// Create an object that can be set to "null" for garbage collection
let person = { name: "Max" };

// Create a new empty WeakMap
const personData = new WeakMap();
console.log(personData);
console.log("----------");

// Set the object (key) w/ its paired value as a new element of the WeakMap
personData.set(person, "Extra information");
console.log(personData);
console.log("----------");

// Retrieve the value of the key "person" w/in the WeakMap
console.log(personData.get(person));
console.log("----------");

// Check the existence of the key "person" w/in the WeakMap
console.log(personData.has(person));
console.log("----------");

// Mark the object for garbage collection
person = null;
console.log(personData);
console.log("----------");
