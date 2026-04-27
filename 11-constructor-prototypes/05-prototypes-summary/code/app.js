// Constructor function
function User() {
  name: "John Wick";
}

// These properties will become part of the created object's "prototype object"
User.prototype = {
  age: 60,
  status: "alive",
};

// Instantiate Constructor function "User" to an object
const person = new User();
console.log(person);

// Proof that the properties passed into the object that assigned as value
// To the property ".prototype" of the Constructor function
// Becomes the "prototype object" of the created object
console.log(User.prototype);
console.log(person.__proto__);

// Verifies that both properties point to the same object in memory
console.log(User.prototype === person.__proto__);
