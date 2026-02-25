// JavaScript objects that functions as keys in a map
const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

// Create a new map w/ 1 nested array
const personData = new Map([[person1, [{ date: "yesterday", price: 10.0 }]]]);
console.log(personData);
console.log("----------");

// Retrieve the value of the entry w/ the key of "person1"
console.log(personData.get(person1));
console.log("----------");

// Add a new entry in the map
personData.set(person2, [{ date: "two weeks ago", price: 100.0 }]);
console.log(personData);
console.log("----------");

// Display ALL entries in the map
for (const entry of personData.entries()) {
  console.log(entry);
}
console.log("----------");

// Use array destructuring to pull out elements of the array w/in a map
for (const [key, value] of personData.entries()) {
  console.log(key, value);
}
console.log("----------");

// Display ALL entries' keys in the map
for (const key of personData.keys()) {
  console.log(key);
}
console.log("----------");

// Dislay ALL entries' values in the map
for (const value of personData.values()) {
  console.log(value);
}
console.log("----------");

// Delete ALL entries from the map
personData.clear();
console.log(personData);
console.log("----------");

// Display size of the map
console.log(`Current size of the map is ${personData.size}.`);
