const prices = [10.99, 5.99, 3.99, 6.59];
const nameFragments = ["Max", "Schwarz"];

// Pull out elements from nameFragments & use it to populate the array copiedNameFragments
// Creating a shallow copy of the former array
const copiedNameFragments = [...nameFragments];

// Push a new element into nameFragments
nameFragments.push("Mr");

// Demonstrates the shallow copy of copiedNameFragments
console.log(nameFragments, copiedNameFragments);

// Use ... operator and Math.min() to display the smallest number value in the array
console.log(Math.min(...prices));

// Common mistake in using ... opoerator
// The shallow copied array is ASSUMED to have its element shallow copied as well
// The elements are the same as the former / original array
// Update on an element is reflect on both arrays
const persons = [
  { name: "Max", age: 30 },
  { name: "Manuel", age: 31 },
];

// Create a shallow copy of the original array persons (but keep the original elements)
const copiedPersons = [...persons];

// Use .map() to create shallow copy of the original array and its individual elements
const newPersons = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));

// Add a new element (object) in the array persons
persons.push({ name: "Anna", age: 29 });

// Update the age property of the 1st object in the persons array
// The 1st object in both arrays are updated
persons[0].age = 50;

console.log(persons);
console.log(copiedPersons);
console.log(newPersons);
