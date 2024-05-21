const person = {
  name: "Max",
  hobbies: ["Sports", "Cooking"],
};

// Display properties of the object
console.log(person);

// Use the spread operator to create a non-shallow copy of the original object
const anotherPerson = { ...person };

// To confirm, add new properties (with values) to the new object
anotherPerson.age = 30;
anotherPerson.job = "web developer";

// Additional properties did NOT get reflected back on the original object
console.log(anotherPerson);

// NOTE: ONLY the new object is NOT shallow-copied
// Proerpty value that is an iterable (e.g. array) remains to be a reference value
// Meaning it refers to the same value in memory
// An update on the value will be reflected back to the original object
anotherPerson.hobbies.push("Coding");

// Create another deep copy of the object person
// Overwrite the reference values copied from original object with new ones
// By declaring the property with new values
// Using a spread operator on iterable values to clone the values (NOT copied reference values)
const newPerson = { ...person, age: 50, hobbies: [...person.hobbies] };

// To verify, modify an iterable value
newPerson.hobbies[2] = "Hacking";

// Update iterable value is NOT reflected back to the original object
console.log(newPerson);
