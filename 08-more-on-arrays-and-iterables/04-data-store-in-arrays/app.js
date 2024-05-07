// Array with string elements
const hobbies = ["Cooking", "Sports"];

// Array with different data types as elements
const personalData = [30, "Max", { moreDetail: [] }];

// Accessing the 2nd element of personalData using its index value
console.log("Personal Data: " + personalData[1]);

// A multi-dimensional array
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

// Loop through the individual nested elements of a multidimensional array
for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log("Data point: " + dataPoint);
  }
}
