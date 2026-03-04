// Source object
const person = {
  name: "Max",
  hobbies: ["cooking", "sports"],
};
console.log(person);
console.log("----------");

// Perform a deep copy of the object "person" into "person2"
// NOTE: The reference value assigned on the "person" object's property "hobbies" is a shallow copy
const person2 = { ...person };

// Add a new property "age" to object "person2"
person2.age = 40;

// Update "person" object's property "hobbies"
person.hobbies.push("hacking");
console.log(person);
console.log(person2);
console.log("----------");

// Perform a deep copy of the object "person" into "person2" & add a new property "age"
// Prevent a shallow copy on the reference value assigned on "person" object's property "hobbies"
const person3 = {
  ...person,
  age: 50,
  hobbies: [...person.hobbies],
};

// Update "person" object's property "hobbies" again
person.hobbies.pop();

// Check the difference on the objects' respective properties & assigned values
console.log(person);
console.log(person2);
console.log(person3);
console.log("----------");
