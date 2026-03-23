// #1 "this" in a global context; returns a global Window object
console.log(this);
console.log("----------");

// #2 "this" in a normal function, called in the global context & returns a global Window object
function somethingOne() {
  console.log(this);
}
somethingOne();
console.log("----------");

// #3 "this" in an Arrow function, called in the global context & returns a global Window object
const somethingTwo = () => {
  console.log(this);
};
somethingTwo();
console.log("----------");

// #4 "this" in a method (non-Arrow function), called on an object; returns the value of the property "name"
const personOne = {
  name: "Max",
  greet() {
    console.log(this.name);
  },
};
personOne.greet();
console.log("----------");

// #5 "this" in a method (Arrow function), called on an object
const personTwo = {
  name: "Max",
  greet: () => {
    console.log(this.name);
  },
};
personTwo.greet(); // "this" references nothing or the global Window object

// #6 "this" call in on some other object
const anotherPerson = {
  name: "Manuel",
};

anotherPerson.sayHi = personOne.greet; // Adds a new method on-the-fly named "sayHi"; copies the "greet()" method of "personOne" object
anotherPerson.sayHi(); // "this" references the object "anotherPerson" as it calls/executes the method "sayHi"
