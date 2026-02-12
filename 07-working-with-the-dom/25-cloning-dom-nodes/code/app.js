// Select the HTML element <ul>
const list = document.querySelector("ul");

// Create a new Element node
const newLi = document.createElement("li");
newLi.textContent = "Item 4";

// Deep clone the Element node "newLi"
const newLi2 = newLi.cloneNode(true);

// Append two new child Element nodes to the Element node "list"
list.append(newLi, newLi2);
