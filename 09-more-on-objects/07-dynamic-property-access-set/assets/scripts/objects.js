// Assume the assigned value was provided by the user
const userChosenKeyName = "level";

// Define an object with unique property
let person = {
  "first-name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  [userChosenKeyName]: "...", // Dynamically create a property name
  greet: function () {
    alert("Hi there!");
  },
  1.5: "Hello there",
};

// Display properties & method(s) of the object
console.log(person);

// Using square bracket notation to dynamically access an object's property
const keyName = "first-name"; // Assume the value to be dynamically assigned to the constant variable
console.log(person[keyName]);
