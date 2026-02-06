// Select an Element node by its HTML attribute "id"
console.log(document.getElementById("main-title"));

const h1 = document.getElementById("main-title");
console.dir(h1);
console.log("----------");

// Select Element node(s) by its HTML attribute "class"
console.log(document.getElementsByClassName("list-item"));
console.log("----------");

// Select the 1st matching Element node using method .querySelector()
console.log(document.querySelector(".list-item"));
console.log("----------");

// Select the first child Element node
const firstChild = document.querySelector("ul li:first-of-type");
console.log(firstChild);
console.log("----------");

// Select the last child Element node
const lastChild = document.querySelector("ul li:last-of-type");
console.log(lastChild);
console.log("----------");

// Select all matching Element nodes using method .querySelectorAll()
const list = document.querySelectorAll(".list-item");
console.log(list);
console.log("----------");
