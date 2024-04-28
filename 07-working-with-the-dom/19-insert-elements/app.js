// Select parent Element node
const list = document.querySelector("ul");

// Create and configure new Element node
const newLi = document.createElement("li");
newLi.textContent = "Item 4";

// Insert created element before the first child of the selected parent Element
list.prepend(newLi);

// Move the created child element before the last child Element <li>
// Child element is moved to its new location; NOT COPIED
list.lastElementChild.before(newLi);

// Move the created child element after the last child Element <li>
list.lastElementChild.after(newLi);

// Replace first child element with the created child element
list.firstElementChild.replaceWith(newLi);

// Select the 2nd child & then insert the created element
const secondLi = list.children[1];
// secondLi.after(newLi);

// Insert the created element before the 1st child element
secondLi.insertAdjacentElement("beforebegin", newLi);
