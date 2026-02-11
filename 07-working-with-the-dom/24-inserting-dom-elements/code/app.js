// Select the HTML element <ul>
const list = document.querySelector("ul");

// Create a new Element node
const newLi = document.createElement("li");

// Set properties of the Element node "newLi"
newLi.textContent = "Item 4";

// Append the Element node "newLi" as the 1st child of the parent Element node "list"
list.prepend(newLi);

// Move the Element node "newLi" BEFORE the last element child of the parent Element node "list"
list.lastElementChild.before(newLi);

// Move the Element node "newLi" AFTER the last element child of the parent Element node "list"
list.lastElementChild.after(newLi);

// Replace the 1st child Element node w/ the Element node "newLi"
list.firstElementChild.replaceWith(newLi);

// Create another new Element node "brandnewLi"
const brandnewLi = document.createElement("li");
brandnewLi.textContent = "Item 4";

// Select the 2nd child node of the parent Element node "list"
const secondLi = list.children[1];

// Append the Element node "brandnewLi" AFTER the current 2nd child of the parent Element node "list"
secondLi.insertAdjacentElement("afterend", brandnewLi);
