// Behind-the-scenes of a Constructor function
function Person() {
  // this = {};
  this.name = "Max";
  this.age = 40;

  this.greet = function () {
    console.log(`Hi! My name is ${this.name}, I'm ${this.age} years old`);
  };
  // return this
}

const person = new Person();
person.greet();
