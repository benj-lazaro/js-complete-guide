// A string data
const data = "New York;10.99;2026";

// Split string data & store into an array
const tranformedData = data.split(";");

// Convert from string to integer
tranformedData[1] = +tranformedData[1];

console.log(tranformedData);

const nameFragments = ["John", "Wick"];

// Join the array elemenets into a simgle string; separated by a whitespace character
const userName = nameFragments.join(" ");
console.log(`Greetings ${userName}, welcome to the training program...`);
