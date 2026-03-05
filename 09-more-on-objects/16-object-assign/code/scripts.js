// Source object
const person = {
  name: "Max",
  hobbies: ["cooking", "sports"],
};

const person2 = Object.assign({ hobbies: [...person.hobbies] }, person);

person.name = "John Wick";
person.hobbies.push("pottery");

console.log(person);
console.log(person2);
