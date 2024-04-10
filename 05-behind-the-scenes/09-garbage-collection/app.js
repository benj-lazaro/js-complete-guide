// Garbage collection demo

let person = { name: "Max" }; // Variable with a reference value
console.log("person: ", person);

person = null; // Garbage collector removes the object since it is no longer referenced in the code
console.log("person: ", person);
