// Select the HTML element <ul>
const list = document.querySelector("ul");

// Remove the Element node "list"
// list.remove();

const removedElement = list.parentElement.removeChild(list);
console.log(removedElement);
