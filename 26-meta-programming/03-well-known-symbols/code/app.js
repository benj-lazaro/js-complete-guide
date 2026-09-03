// Create a unique object property identifier named "uid"
const uid = Symbol("uid"); // This is supposed to be hidden from the user
console.log(uid);

// Access Symbol.toStringTag to provide a description of the object
const user = {
  [uid]: "person1",
  name: "John Wick",
  age: 60,
  [Symbol.toStringTag]: "A simple object literal using Symbols as properties.",
};

// Update the assigned value of Symbol "uid" from "person1" to "person3"
user[uid] = "person3";
console.log(user);

// Accessing assigned values of Symbols in an object
console.log(user[uid]);
console.log(user[Symbol.toStringTag]);

// Using the method ".toString()" to output the object's tag (description)
console.log(user.toString());
