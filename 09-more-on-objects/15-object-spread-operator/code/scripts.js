// Source object
const person = {
  name: "Max",
  hobbies: ["cooking", "sports"],
};
console.log(person);
console.log("----------");

// Performs a deep-copy of "person" object to "person2"
// NOTE: The assigned reference value to the property "hobbies" of the "person2" object is a shallow copy
const person2 = { ...person };

// Add a new property "age" on-the-fly to the object "person2"
person2.age = 40;

// Update the property "hobbies" of the object "person"
// NOTE: This also updates the reference value of the property "hobbies" of the object "person2"
person.hobbies.push("hacking");
console.log(person);
console.log(person2);
console.log("----------");

// Performs a deep-copy of "person" object to "person3"
// Performs a deep-copy on the reference value assigned to the property "hobbies" of the object "person"
const person3 = {
  ...person,
  age: 50,
  hobbies: [...person.hobbies],
};

// Update the property "hobbies" of the object "person" by popping an element from that reference value
// NOTE: The property "hobbies" of objects "person" & "person2" updates but NOT the object "person3"
person.hobbies.pop();

// Check the difference on the objects' respective properties & assigned values
console.log(person);
console.log(person2);
console.log(person3);
console.log("----------");
