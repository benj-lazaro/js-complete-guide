// Select multiple <li> Element nodes from the DOM & iterate through each element

// Returns a static NodeList
const listItemElements = document.querySelectorAll("li");
console.log(listItemElements);

for (const listEl of listItemElements) {
  console.dir(listEl);
}

// Returns a live HTMLCollection
const listItemElements2 = document.getElementsByTagName("li");
console.log(listItemElements2);

for (const listEl2 of listItemElements2) {
  console.dir(listEl2);
}

// Change the text content, background & foreground color of the <h1> Element node
const h1 = document.getElementById("main-title");
h1.textContent = "Some new title";
h1.style.backgroundColor = "black";
h1.style.color = "white";

// Change the text content of the last child element of the unordered list item
const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + " updated!";
