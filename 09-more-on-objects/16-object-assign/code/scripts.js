// Source object
const person = {
  name: "Max",
  hobbies: ["cooking", "sports"],
};

const person2 = Object.assign(person);
person.hobbies.push("pottery");

const person3 = Object.assign({ occupation: "assassin" }, person);

console.log(person);
console.log(person2);
console.log(person3);
