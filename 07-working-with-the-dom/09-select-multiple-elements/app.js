// The querySelectorAll() returns a static NodeList
// const listItemElements = document.querySelectorAll("li");
// console.log(listItemElements);

// getElementsByTagName() returns a live HTMLCollection
const listItemElements = document.getElementsByTagName("li");
console.log(listItemElements);

// Access a specific Element node from the collection / list
console.log(listItemElements[0]);

// Access the properties of a specific Element node
console.dir(listItemElements[0]);

console.log("-----------------------");

// Use for of loop to access individual <li> elements
for (listItemElement of listItemElements) {
  console.dir(listItemElement);
}

console.log("-----------------------");

// Select the last <li> element using pseudo-selector
const lastLi = document.querySelector("li:last-of-type");

// Change the text content
lastLi.textContent += " (Changed)";

console.log("-----------------------");

// Select element <h1> using getElementById()
const h1 = document.getElementById("main-title");

// Change the text content; live update
h1.textContent = "Some New Title!";

// Change the text content's color; live update
h1.style.color = "white";

// Change the text content's background color; live update
h1.style.backgroundColor = "red";
