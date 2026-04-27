// Create an object using Constructor function
function Person() {
  this.name = "Max";
  this.age = 40;
  this.greet = function () {
    console.log(`Hi! My name is ${this.name}, I'm ${this.age} years old`);
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  },
  course: "JavaScript",
};

const person1 = new Person();
console.log(person1);
person1.greet();
console.log("-----");

// The "prototype object" assigned to the property ".__proto__" of
// The Constructor function & created object based on it
console.log(Person.__proto__);
console.log(person1.__proto__);
console.log("-----");

// The "prototype object" assigned to the property ".prototype" of
// Constructor function & property ".__proto__" of the created object based on it
console.log(Person.prototype);
console.log(person1.__proto__);
console.log("-----");

// Create an object using Object literal notation
const person2 = {
  name: "John Wick",
  age: 60,
  greet: function () {
    console.log(`Hi! My name is ${this.name}, I'm ${this.age} years old`);
  },
};

console.log(person2);
person2.greet();
console.log("-----");
