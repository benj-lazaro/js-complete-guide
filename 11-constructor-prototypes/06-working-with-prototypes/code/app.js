// Base Class
// Get assigned to the "prototype object" property ".__proto__"
// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// Sub-Class
// Get assigned to the "prototype object" property ".constructor"
// class Person extends AgedPerson {
//   name = "Max";

//   constructor() {
//     super();
//     this.age = 40;
//   }

//   greet() {
//     console.log(`Hi I am ${this.name} and I am ${this.age}`);
//   }
// }

// Constructor function
function Person() {
  this.name = "Max";
  this.age = 40;
  this.greet = function () {
    console.log(`Hi I am ${this.name} and I am ${this.age}`);
  };
}

// Create an object & set it as "prototype object" of the (to be) created object
// Overriding the default "prototype object"
// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// To preserve the property ".constructor" of the created object's "prototype object"
Person.prototype.printAge = function () {
  console.log(this.age);
};

Person.prototype.status = "alive";

const person = new Person();
console.log(person);
person.greet();
person.printAge();

// Create a new object by using the property ".constructor" of the "prototype object"
// Assigned as value to the created object's property ".__proto__"
const person2 = new person.__proto__.constructor();
console.log(person2);
