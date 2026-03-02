// Dynamically add a new property using bracket notation
const newProperty = "job-title";

// Object literal notation
const person = {
  name: "Max",
  age: 30,
  greet: function () {
    alert("Hello there!");
  },
  1.5: "Hello there!",
  [newProperty]: null,
};

// Assign a value to the added property "job-title"
person["job-title"] = "Full-stack Web Developer";

console.log(person);

// Dynamically access an existing property using bracket notation
const keyName = "name";
console.log(person[keyName]);
