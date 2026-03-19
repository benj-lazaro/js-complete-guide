// Source object
const person = {
  name: "Max",
  hobbies: ["cooking", "sports"],
};

// Perform a deep-copy of the object "person" into a new object "person2"
const person2 = Object.assign({}, person);

// Update property "name" of the object "person"
person.name = "Maximillian";

// Then push a new value to the property "hobbies" of the object "person"
person.hobbies.push("pottery");

// Objects "person" & "person2" have different primitive values but identical reference values
console.log(person);
console.log(person2);

// Perform a deep-copy of the object "person"
// Pre-define the property "occupation" assigned w/ a primitive value
const person3 = Object.assign({ occupation: "cook" }, person);

// ONLY the object "person3" has a property named "occupation" that is
// NOT present in both objects "person" & "person2"
console.log(person3);
