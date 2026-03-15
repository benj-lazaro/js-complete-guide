// Object literal notation
const person = {
  name: "Max",
  age: 30,
  greet: function () {
    alert("Hello there!");
  },
  1.5: "Hello!",
};

console.log(person);

// Accessing Number data typed property name using Square bracket notation
console.log(person["1.5"]);

// Object w/ properties of Number data type
const numbers = {
  5: "hi",
  1: "there",
};

console.log(numbers);
