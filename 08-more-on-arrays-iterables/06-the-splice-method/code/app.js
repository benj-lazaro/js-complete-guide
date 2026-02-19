// Setup array w/ pre-defined items
const hobbies = ["Sports", "Cooking"];
console.log(hobbies);

// Inserts a new element starting at index 0, deletes nothing
hobbies.splice(0, 0, "Good food");
console.log(hobbies);

// Removes the 1st element from the array
hobbies.shift();

// Inserts a new elements starting at index 1, deletes nothing
hobbies.splice(1, 0, "Good food", "Coding");
console.log(hobbies);

// Delete the 1st element of the array, NOT using ".shift()"
hobbies.splice(0, 1);
console.log(hobbies);

// Delete the 2nd to the last element from the array
const removedElement = hobbies.splice(-2, 1);
console.log(hobbies);
console.log(`Removed element: ${removedElement}`);

// Delete ALL elements starting from index 0
const removedElements = hobbies.splice(0);
console.log(hobbies);
console.log(`Removed elements: ${removedElements}`);
