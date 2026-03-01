// Object literal notation
const person = {
  name: "Max",
  age: 30,
  greet: function () {
    alert("Hello there!");
  },
  1.5: "Hello there!",
};

console.log(person);

// Accessing a number data type property name
console.log(person["1.5"]);
