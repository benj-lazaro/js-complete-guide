// Get an Element node by its ID attribute
const h1Element = document.getElementById("main-title");
console.log("getElementById()");
console.log(h1Element);
console.dir(h1Element);
console.log("------------------");

// Get Element nodes by class name attribute
// Returns a HTMLCollection, an array-like object
const elementsByClassName = document.getElementsByClassName("list-item");
console.log("getElementByClassName()");
console.log(elementsByClassName);
console.log("------------------");

// Modern method of getting Element nodes
// Get 1st matching Element node based on its class name
const firstMatchingElement = document.querySelector(".list-item");
console.log("querySelector()");
console.log(firstMatchingElement);

// Get all matching Element nodes based on its class name
const allMatchingElements = document.querySelectorAll(".list-item");
console.log(allMatchingElements);

// Get the first <li> embedded within an <ul> element node
const firstOfType = document.querySelector("ul li:first-of-type");
console.log(firstOfType);

// Get the last <li> embedded within an <ul> element node
const lasttOfType = document.querySelector("ul li:last-of-type");
console.log(lasttOfType);
