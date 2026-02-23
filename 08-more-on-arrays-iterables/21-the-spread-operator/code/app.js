// Array of primitive values
const prices = [10.99, 5.99, 3.99, 6.59];
const nameFragments = ["Max", "Schwarz"];

// Copy elements of the array "nameFragments" into a new array
const copyNameFragments = [...nameFragments];

nameFragments.push("Mister");

console.log(nameFragments);
console.log(copyNameFragments);
console.log("----------");

// Find the minimum value of the array "prices"
console.log(`Prices: ${prices}`);

// Spread operator on argument value
const minPrice = Math.min(...prices);
console.log(`Minimum price: ${minPrice}`);
console.log("----------");

// Array of objects
const persons = [
  { name: "John Wick", age: 60 },
  { name: "Thomas Anderson", age: 60 },
];

// Spread the elements of the array "persons" into the new array "copiedPersons"
const copiedPersons = [...persons];

// Push a new element on the source array "persons"
persons.push({ name: "Eve Macarro", age: 37 });

// Modify the 2nd element of the source array "persons"
persons[1].name = "Babayaga";

// Changes made on the source array is reflected on the new array
console.log(persons, copiedPersons);

// Spread the elements of the array "person" into the new array "newPersons"
// Map object elements of the source array into new object elements for the new array
// const newPersons = [
//   ...persons.map((person) => ({ name: person.name, age: person.age })),
// ];

// Use the method ".map()" to map object elements of the source array
// As element objects of the new array
const newPersons = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));

// Modify the 2nd element of the source array "persons"
persons[1].name = "Thomas Anderson";

console.log(newPersons);
console.log("----------");
