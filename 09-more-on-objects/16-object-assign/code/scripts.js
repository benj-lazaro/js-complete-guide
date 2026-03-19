// Source object
const person = {
  name: "Max",
  hobbies: ["cooking", "sports"],
};

// Copy source object "person" into a new object "person2"
const person2 = Object.assign(person);

// Push a new value to the property "hobbies" of the object "person"
person.hobbies.push("pottery");

// Copy source object "person" & add a new property "occupation" into a new object "person3"
const person3 = Object.assign({ occupation: "cook" }, person);

// Contains identifical properties
console.log(person);
console.log(person2);

// Contains an additional property "occupation"
console.log(person3);
