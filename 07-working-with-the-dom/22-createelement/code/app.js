// Select the HTML element <ul>
const list = document.querySelector("ul");

// Create a new Element node
const newLi = document.createElement("li");

// Set the property ".textContent" of the created Element node "newLi"
newLi.textContent = "Item 4";

// Append the created Element node "newLi" as a new child of the Element node "list"
list.appendChild(newLi);
