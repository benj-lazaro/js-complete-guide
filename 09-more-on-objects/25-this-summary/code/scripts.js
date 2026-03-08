// #1 "this" in a global context
console.log(this);

// #2 "this" in a non-Arrow function, called in the global context
function somethingOne() {
  console.log(this);
}
somethingOne();

// #3 "this" in an Arrow function, called in the global context
const somethingTwo = () => {
  console.log(this);
};
somethingTwo();

// #4 "this" in a method (non-Arrow function), called on an object
const personOne = {
  name: "Max",
  greet() {
    console.log(this.name);
  },
};
personOne.greet();

// #5 "this" in a method (Arrow function), called on an object
const personTwo = {
  name: "Max",
  greet: () => {
    console.log(this.name);
  },
};
personTwo.greet(); // "this" refers nothing or the global Window object

// #6 "this" call in on some other object
const anotherPerson = {
  name: "Manuel",
};

anotherPerson.sayHi = personOne.greet; // Adds a new method to the object
anotherPerson.sayHi(); // "this" refers to the thing w/c called it (i.e. anotherPerson)
