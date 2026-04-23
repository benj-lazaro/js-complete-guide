// Object literal notation
const person = {
  name: "Max",
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  },
};

console.log(person);
person.greet();

// View default object descriptors
console.log(Object.getOwnPropertyDescriptors(person));

// Prevent the property "name" to be assigned w/ a new value
Object.defineProperty(person, "name", {
  configurable: true,
  enumerable: true,
  value: person.name,
  writable: false,
});

console.log(Object.getOwnPropertyDescriptors(person));

// Attempt to set the property "name" w/ a new value
person.name = "John Wick";
console.log(person);
person.greet();
console.log("----");

// Make the property "name" undeletable
// Object.defineProperty(person, "name", {
//   configurable: false,
//   enumerable: true,
//   value: person.name,
//   writable: false,
// });

// Attempt to delete property "name"
// delete person.name;
// console.log(person);
// console.log(Object.getOwnPropertyDescriptors(person));

// Make the property "name" invisible from a "for..in" loop
for (const key in person) {
  console.log(key);
}
console.log("----");

Object.defineProperty(person, "name", {
  configurable: true,
  enumerable: false,
  value: person.name,
  writable: true,
});

for (const key in person) {
  console.log(key);
}
