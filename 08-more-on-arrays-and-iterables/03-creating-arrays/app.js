// Most common way of creating an array
const numbers = [1, 2, 3];
console.log(numbers);

// Creating an array using an array constructor
const moreNumbers = new Array(5); // Returns an array of 5 empty elements
console.log(moreNumbers);

// Creating an array using .of() method
const yetMoreNumbers = Array.of(1, 2, 3);
console.log(yetMoreNumbers);

// Creating an arary using .from() method
const listItems = document.querySelectorAll("li");
console.log(listItems); // Returns an array-like object

const arrayListItems = Array.from(listItems);
console.log(arrayListItems); // Returns a real array object
