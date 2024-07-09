// Random metadata
const data = "new york; 10.99; 2000";
console.log(data);

// Split data into individual element using ";" as the identified separator
// Store each data as an array element
const transformedData = data.split(";");
console.log(transformedData);

// Join elements into a single string with whitespace as a string separator
const nameFragments = ["Max", "Schwarz"];
const nameJoined = nameFragments.join(" ");
console.log(nameJoined);
