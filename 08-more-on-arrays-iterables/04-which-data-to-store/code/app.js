// Same data types
const hobbies = ["cooking", "sports"];
console.log(hobbies);

// Mixed data types
const personalData = [30, "Max", { moreDetails: [] }];
console.log(personalData);

// Accessing array item by index
console.log(personalData[1]); // Returns the name

// Nested / Multi-dimensional
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}
