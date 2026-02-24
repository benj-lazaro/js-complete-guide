// Array of primitive values
const userData = ["Max", "Schwarz", 40, "Europe"];

// Extract elements of the array into individual constants
const [firstName, lastName, ...otherInfo] = userData;

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Other info: ${otherInfo}`);
