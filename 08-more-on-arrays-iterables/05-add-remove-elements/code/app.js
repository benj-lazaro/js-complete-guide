// Setup array w/ pre-defined items
const hobbies = ["Sports", "Cooking"];
console.log(hobbies);

// Push new item into the array
hobbies.push("Reading");
console.log(hobbies);

// Push new item at the beginning of the array
hobbies.unshift("Coding");
console.log(hobbies);

// Remove last item from the array
const poppedValue = hobbies.pop();
console.log(`Removed last item: ${poppedValue}`);
console.log(hobbies);

// Remove 1st item from the array
const removedItem = hobbies.shift();
console.log(`Removed 1st time: ${removedItem}`);
console.log(hobbies);

// Change the 2nd element of the array
hobbies[1] = "Coding";
console.log(hobbies);

// Adding a 6th element into the array
hobbies[5] = "Hacking";
console.log(hobbies);
