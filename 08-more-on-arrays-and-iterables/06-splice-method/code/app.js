const hobbies = ["Sports", "Cooking"];

// Start at index 1, do not delete elements from hereon & then insert a string element at index
hobbies.splice(1, 0, "Good Food");

// Start at index 0, remove the 1 element at that index position
hobbies.splice(0, 1);

// Deletes elements starting from index 0
const removedElements = hobbies.splice(0);

// Show array content at console
console.log(hobbies);
console.log("Removed element(s): " + removedElements);
