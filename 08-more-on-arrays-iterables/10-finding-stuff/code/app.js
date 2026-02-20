// Array of reference values (objects)
const personData = [{ name: "Max" }, { name: "Manuel" }];
console.log(personData);

// Find the matching element w/in an array
const findPerson = personData.find((person, index, persons) => {
  return person.name === "Manuel";
});

console.log(findPerson);

// Find the index of the matching element w/in an array
const findPersonIndex = personData.findIndex((person, index, persons) => {
  return person.name === "Manuel";
});

console.log(findPersonIndex);
