// Normal JavaScript object
const person = {
  // this is NOT JSON - it's a normal ("raw") JavaScript object!
  name: "Max",
  age: 30,
  hobbies: [
    { id: "h1", title: "Sports" },
    { id: "h2", title: "Cooking" },
  ],
  isInstructor: true,
};
console.log(person);

// Convert JavaScript object to JSON data
const jsonData = JSON.stringify(person);
console.log(jsonData);

// Convert JSON data to a JavaScript object
const jsData = JSON.parse(jsonData);
console.log(jsData);
