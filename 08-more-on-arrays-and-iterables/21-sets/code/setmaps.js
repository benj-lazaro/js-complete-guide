// Set is a data structure without any duplicate elements

// To define a new set with predefined elements
const ids = new Set(["Hi", "from", "set!"]);
console.log(ids);

// To add/insert a new element with a value of 2 into the set
ids.add(2);
console.log(ids);

// To check if an element with a specified value exists within the set
console.log(ids.has(1));

// To access/read elements of the set using for..of loop
for (entry of ids.entries()) {
  console.log(entry); // Returns array [values, values]
  console.log(entry[0]); // Returns the element's corresponding value ONLY
}

// To remove an element from the set
if (ids.has("Hi")) {
  ids.delete("Hi");
}
console.log(ids);
