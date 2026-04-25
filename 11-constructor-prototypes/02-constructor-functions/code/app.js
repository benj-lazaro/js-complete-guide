// Create an object using a Class
class Person {
  name = "Max";

  constructor() {
    this.age = 40;
  }

  greet() {
    console.log(`Hi! My name is ${this.name}, I'm ${this.age} years old`);
  }
}

const person = new Person();
person.greet();

// Create an object using a Constructor function
function Person1() {
  this.name = "Manu";
  this.age = 40;

  this.greet = function () {
    console.log(`Hi! My name is ${this.name}, I'm ${this.age} years old`);
  };
}

const person1 = new Person1();
person1.greet();
