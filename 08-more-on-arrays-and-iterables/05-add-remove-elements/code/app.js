const hobbies = ["Sports", "Cooking"];

// Use .push() method to add a new element at the end of the array
hobbies.push("Reading");

// Use .unshift() method to add a new element at the beginning of the array
hobbies.unshift("Coding");

// Use .pop() method to remove the last element of the array
const poppedValue = hobbies.pop();
console.log(`${poppedValue} was popped from the end of the array`);

// Use .shift() method to remove the first element of the array
hobbies.shift();

// Use direct index access to specifically select an element
// Replace its content with a new one
hobbies[1] = "Coding";

// Add a new element at a non-existent position in an array
// NOTE: This is RARELY used & not advisable to do so
hobbies[5] = "Reading"; // Add 3 empty elements before "Reading"

// View content of the array
console.log(hobbies);
