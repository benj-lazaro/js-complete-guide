// Object literal notation
const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hello there!");
  },
};

console.log(person);

// Add a new property "isAdmin" on-the-fly
person.isAdmin = true;
console.log(person);

// Assign the value of "null" to the property "age"
person.age = null;
console.log(person);

// Delete existing property "age"
delete person.age;
console.log(person);
