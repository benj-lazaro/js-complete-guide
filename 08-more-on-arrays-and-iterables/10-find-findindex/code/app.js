const personData = [{ name: "Max" }, { name: "Manuel" }];

// Finding reference values in an array
// The callback function gets executed for every element in the array (personData)
// Returns the matching reference value; specifying the property to be return (e.g. name)
const manuel = personData.find((person, index, persons) => {
  return person.name === "Manuel";
});

console.log(manuel);

// Demonstrates that .find() works on the actual array, NOT a copy
manuel.name = "Anna";
console.log(personData);
console.log(manuel);

// Finding the index of a reference value element in an array
// The callback function gets executed for every element in the array (personData)
// Returns the index of the matching reference value
const maxIndex = personData.findIndex((person, index, persons) => {
  return person.name === "Max";
});

console.log(maxIndex);
