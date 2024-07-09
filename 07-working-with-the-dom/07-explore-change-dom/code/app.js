// Select the Element node <h1> from the DOM
const h1 = document.querySelector("h1");

// Replace the text content of the Element
h1.textContent = "Some new text!";

// Assign a CSS class name to the Element node
h1.className = "title";

// Change the style and background color of the Element node's content
h1.style.color = "white";
h1.style.backgroundColor = "red";

// To check available properties from Element node <h1>
console.dir(h1);
