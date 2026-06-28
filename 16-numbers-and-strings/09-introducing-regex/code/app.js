// Test string value
const userInput = "test@test.com";
// const userInput = "testtest.com";

// Define the string pattern
const regex = /^\S+@\S+\.\S+$/;

// Checks if the string value in userInput passes the string pattern test
let result = regex.test(userInput);
console.log(result);
