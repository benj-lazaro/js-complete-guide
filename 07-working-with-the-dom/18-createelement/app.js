const list = document.querySelector("ul");

// Create a new <li> element using .createElement() & configure it
const newLi = document.createElement("li");
newLi.textContent = "Item 4";
newLi.style.backgroundColor = "blue";

// Append the element into the targeted <ul> element as a child using appendChild()
list.appendChild(newLi);
