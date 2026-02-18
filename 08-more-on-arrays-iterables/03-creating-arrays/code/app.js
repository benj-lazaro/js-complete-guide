// Using the bracket notation
const numbers = [1, 2, 3];
console.log(numbers);

// Using the Array constructor
const moreNumbers = new Array(5, 2);
console.log(moreNumbers);

// Using the Array constructor w/ the method ".of()"
const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

// NodeList iterable
const listItems = document.querySelectorAll("li");
console.log(listItems);

// Using the Array constructor w/ the method ".from()
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);
