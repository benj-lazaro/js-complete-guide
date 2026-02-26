// Create an object that can be set to "null" for garbage collection
let person = { name: "Max" };

// Create a new empty WeakSet
const persons = new WeakSet();
console.log(persons);
console.log("----------");

// Add object into the WeakSet
persons.add(person);
console.log(persons);
console.log("----------");

// Mark the object for garbage collection
person = null;
console.log(persons);
console.log("----------");
