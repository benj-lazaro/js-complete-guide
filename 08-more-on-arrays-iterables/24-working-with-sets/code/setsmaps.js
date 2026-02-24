// Create a new set w/ initial values from an iterable (i.e. array)
const ids = new Set([1, 2, 3]);
console.log(ids);

// To search for a value w/in a set
const findResult = ids.has(2);
console.log(findResult);

// Add an already existing value in the set
ids.add(2);
console.log(ids);

// Go through all of the set's values
for (const entry of ids.entries()) {
  console.log(entry);
}

// Alternative to going through all of the set's values
for (const entry of ids.values()) {
  console.log(entry);
}

// Delete a value from the set
ids.delete(1);
console.log(ids);
