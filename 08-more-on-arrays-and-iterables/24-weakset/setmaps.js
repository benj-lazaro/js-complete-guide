// Define an object
let person = { name: "Max" };

// Define a new WeakSet & add the object into it
const persons = new WeakSet();
persons.add(person);
console.log(persons);

// After some operations, the object needs to garbage collected from heap memory
person = null;
console.log(persons);
console.log(persons.delete(person));
