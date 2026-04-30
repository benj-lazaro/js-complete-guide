// Base Class
class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

// Sub-Class
class Person extends AgedPerson {
  name = "Max";
  age = 40;

  constructor() {
    super();
  }

  greet() {
    console.log(`Hi I am ${this.name} and I am ${this.age}`);
  }
}

// Instantiate Sub-Class "Person" into an Class-based object
const p = new Person();
console.log(p);

// // Constructor function
// function Person() {
//   this.name = "Max";
//   this.age = 40;
//   this.greet = function () {
//     console.log(`Hi I am ${this.name} and I am ${this.age}`);
//   };
// }

// // Dynamically add a method to the Constructor function "Person"
// // To preserve the property ".constructor" of the created object's default "prototype object"
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// // Peek on the Constructor function's properties
// console.dir(Person);

// // Instantiate Constructor function "Person" into an object
// const person = new Person();
// console.log(person);

// // Access method "greet()" defined w/in the Constructor function
// person.greet();

// // Access method "printAge()" NOT defined w/in the Constructor function "Person"
// person.printAge();

// // Compare Constructor function property ".prototype" w/ created object property ".__proto__"
// console.log(Person.prototype === person.__proto__);
