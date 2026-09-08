// Import the built-in Node.js module "fs" (filesystem)
const fileSystem = require("fs");

// Read data from a file
fileSystem.readFile("user-data.txt", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data.toString());
});

// Write data to a file
fileSystem.writeFile("user-data.txt", "userName=JohnWick", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Wrote to file");
  }
});
