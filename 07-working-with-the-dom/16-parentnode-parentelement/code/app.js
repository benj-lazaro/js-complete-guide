// Select the 1st child HTML element <li>

const liFirst = document.querySelector("li");
console.log(liFirst);

// Access the direct parent node of the child node <li>
console.log(liFirst.parentElement);
console.log(liFirst.parentNode);

// Access the ancestor node of the child node <li>
console.log(liFirst.closest("body"));
