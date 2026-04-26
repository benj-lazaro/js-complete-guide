// Constructor function
function Person() {
  this.name = "Max";
  this.age = 40;
  this.greet = function () {
    console.log(`Hi! My name is ${this.name}, I'm ${this.age} years old`);
  };
}

// Assign a fallback object to the property "prototype" of the "Person" object
// This object becomes part of the created object's property "__proto__"
Person.prototype = {
  printAge() {
    console.log(this.age);
  },
};

// Create an object using a Constructor function
const person = new Person();
person.greet();
console.log(person);
console.log("----------");

// Access the "Person" object's property "__proto__"
console.log(person.__proto__);
console.log("----------");

// Access the Constructor function "Person" property "prototype"
console.log(Person.prototype);
console.log("----------");

// Check if property "__proto__" & "prototypes" references the same object
console.log(person.__proto__ === Person.prototype);
console.log("----------");

// Access the fallback method printAge()
person.printAge();
console.log("----------");
