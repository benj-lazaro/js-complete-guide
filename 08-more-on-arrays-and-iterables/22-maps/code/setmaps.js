// Define simple JavaScript objects
const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

// Use map to insert additional properties & values to an object without bloating it

// To define a new map with a predefined properties to be inserted to the specified object
const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
console.log(personData);

// To access the object inside the map
console.log(personData.get(person1));

// To add an entry to a map
personData.set(person2, [{ date: "two weeks ago", price: 100 }]);
console.log(personData);

// To display content of a map
// for (const entry of personData.entries()) {
//   console.log(entry);
// }

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

// To display the keys of each entry in the map
for (const key of personData.keys()) {
  console.log(key);
}

// To display the values of each entry in the map
for (const value of personData.values()) {
  console.log(value);
}

// To clear all entries from the map
personData.clear();
console.log(personData);

// To determine the current size of the map
console.log(personData.size);
