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

  // This method becomes part of the created instance
  // greet = () => {
  //   console.log(`Hi I am ${this.name} and I am ${this.age}`);
  // };

  // This method becomes part of the created instance
  // this.greet = function () {
  //   console.log(`Hi I am ${this.name} and I am ${this.age}`);
  // };

  constructor() {
    super();
    // This method becomes part of the created instance
    // this.greet = function () {
    //   console.log(`Hi I am ${this.name} and I am ${this.age}`);
    // };
  }

  // This method becomes part of the created instance's "prototype object"
  greet() {
    console.log(`Hi I am ${this.name} and I am ${this.age}`);
  }
}

// Instantiate Sub-Class "Person" into Class-based objects
const person1 = new Person();
console.log(person1);

const person2 = new Person();
console.log(person2);

// Check if both instances share the same "prototype object"
console.log(person1.__proto__ == person2.__proto__);

// Use case for making a Class method part of the created instance
const button = document.getElementById("btn");
// button.addEventListener("click", person1.greet);

// Using the method ".bind()" w/ a normally defined Class method as
// A callback function (method) to an Event listener
button.addEventListener("click", person1.greet.bind(person1));

// Constructor function
function Individual() {
  this.name = "Max";
  this.age = 40;
}

// This method becomes part of the created object's "prototype object"
Individual.prototype.greet = function () {
  console.log(`Hi I am ${this.name} and I am ${this.age}`);
};

// Instantiate Constructor function "Individual" into objects
const individual1 = new Individual();
console.log(individual1);

const individual2 = new Individual();
console.log(individual2);

// Check if both instances share the same "prototype object"
console.log(individual1.__proto__ == individual2.__proto__);
