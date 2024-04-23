// Select the parent node of the selected child node
const liFirst = document.querySelector("li");

// Display parent node
console.log(liFirst.parentNode);

// Display parent element
console.log(liFirst.parentElement);

// Reach out to the ancestor element (CSS selector) of the selected child node
console.log(liFirst.closest("body"));
