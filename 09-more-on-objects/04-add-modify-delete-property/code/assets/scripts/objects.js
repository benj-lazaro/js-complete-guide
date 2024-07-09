// Define an object with properties and a method
let person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },
};

console.log(person);

// Call the object's method .greet()
// person.greet();

// To add a property to the object (complex approach)
// Assign recreated object attached with a new property to the same variable
// person = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   greet: function () {
//     alert("Hi there!");
//   },
//   isAdmin: true,
// };
// console.log(person);

// To add a property to the object (simple approach)
// Simply add the property along with its corresponding value using the "." notation
person.isAdmin = true;
console.log(person);

// To delete a property from an object using the delete operator
delete person.age;
console.log(person);
