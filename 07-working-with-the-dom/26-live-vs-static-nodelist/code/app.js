// Select the HTML element <ul>
const list = document.querySelector("ul");

// Select the HTML element <li>
const listItems = list.querySelectorAll("li");
const listItems2 = list.getElementsByTagName("li");

console.log(listItems);
console.log(listItems2);

// Create a new Element node
const newLi = document.createElement("li");
newLi.textContent = "Item 4";

// Add the Element node "newLi" as a child of the Element node "list"
list.append(newLi);

// HTMLCollection reflects the changes, the NodeList does NOT
console.log(listItems);
console.log(listItems2);
