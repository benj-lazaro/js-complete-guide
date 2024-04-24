const h1 = document.getElementById("main-title");

h1.textContent = "Some new title";
h1.style.color = "white";
h1.style.backgroundColor = "red";

const li = document.querySelector("li:last-of-type");
li.textContent += " (Changed!)";

const body = document.body;

const listItemElements = document.getElementsByTagName("li");

for (const listElement of listItemElements) {
  console.dir(listElement);
}

// Access the parent element of ths selected node <li>
const ul = li.parentElement;

// Access previous sibling node of the parent element
console.log("previousSibling");
console.log(ul.previousSibling);

// Access previous sibling element of the parent element
console.log("previousElementSibling");
console.log(ul.previousElementSibling);

// Access next sibling node of the parent element
console.log("nextSibling");
console.log(ul.nextSibling);

// Access the next sibling element of the parent element
console.log("nextElementSibling");
console.log(ul.nextElementSibling);
