// Define an object with unique property
let person = {
  "first-name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },

  1.5: "Hello there",
};

// Display the properties & method(s)
console.log(person);

// Accessing the object's property 1.5
console.log(person[1.5]);

// Define an object with numbers as property names
const numbers = {
  5: "hi",
  1: "true",
};

console.log(numbers);
