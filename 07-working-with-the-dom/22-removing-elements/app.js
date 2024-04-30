// Select parent element <ul>
const list = document.querySelector("ul");

// Remove the parent element from the DOM (NOT IE browser compatible)
// list.remove();

// Remove the parent element from the DOM (IE browser compatible)
const removedChild = list.parentElement.removeChild(list);
console.log("The removed child:", removedChild);
