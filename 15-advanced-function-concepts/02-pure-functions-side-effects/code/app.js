// Pure function
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 5)); // ALWAYS return the same output
console.log(add(12, 15));

// Impure function
// Always returns a different output despite the same input (argument value)
function addRandom(num) {
  return num + Math.random();
}
console.log(addRandom(5)); // Returns a different output despite the same input

// Impure function + side-effect
// Updates the value of a variable located outside of the function
let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; // Updates variable
  return sum;
}
console.log(previousResult);
console.log(addMoreNumbers(1, 5));
console.log(previousResult);

// Impure function + side-effect
// Updates elements of an array passed as an argument value
const hobbies = ["Sports", "Cooking"];
function printHobbies(hobby) {
  hobby.push("New Hobby!"); // Update array
  console.log(hobby);
}
console.log(hobbies);
printHobbies(hobbies);
console.log(hobbies);
