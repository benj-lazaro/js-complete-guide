// Object literal notation
const person = {
  name: "Max",
  age: 30,
  greet: function () {
    alert("Hello there!");
  },
};

console.log(person);

// Add a new property "on-the-fly"
person.job = "web developer";
console.log(person);

// Delete property "age"
delete person.age;
console.log(person);
