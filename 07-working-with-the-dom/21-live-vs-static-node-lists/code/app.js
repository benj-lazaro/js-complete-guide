// Select the parent element <ul>
const list = document.querySelector("ul");

// Select list items of the parent element
// Returns a static NodeList
const listItems = list.querySelectorAll("li");
console.log(listItems);

// Select list items by tag name then assign to a different variable
// Returns a live HTMLCollection
const listItems2 = list.getElementsByTagName("li");
console.log(listItems2);

// Add a new Element nod, configure it & then insert it on parent element
// Check the output of constant variables listItems & listItems2
const newLi = document.createElement("li");
newLi.textContent = "Item 4";
newLi.className = "list-item";
list.append(newLi);
