// Assign a new property name to a constant
const userChosenKeyName = "level";

// Dynamically add new property using Square bracket notation & a constant
const person = {
  "first name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hello there!");
  },
  [userChosenKeyName]: null,
};

// Dynamically access the assigned value of property "name" using Square bracket notation
const keyName = "first name";
console.log(person[keyName]);

// Access & update the assigned value of the property "job-title"
person["level"] = "Administrator";
console.log(person);
