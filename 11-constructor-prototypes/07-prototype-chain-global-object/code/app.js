// Constructor function
function Person() {
  this.name = "Max";
  this.age = 40;
  this.greet = function () {
    console.log(`Hi I am ${this.name} and I am ${this.age}`);
  };
}

// To preserve the property ".constructor" of the created object's "prototype object"
Person.prototype.printAge = function () {
  console.log(this.age);
};

// Adds a static function (method) to the Constructor function "Person"
// Gets included in the property ".constructor" of the "prototype object"
Person.describe = function () {
  console.log("Creating a Person object...");
};

Person.who = "hey";
console.dir(Person);

const person = new Person();
person.greet();
person.printAge();
console.log(person);

// Access method that is NOT defined in the created object's Constructor function
console.log(person.toString());

// Access static method of the Constructor function "Person"
Person.describe();

// View details of the Global Object Constructor function
console.dir(Object);
// console.dir(Object.prototype);

// The end of the Prototype Chain
console.dir(Object.prototype.__proto__);
