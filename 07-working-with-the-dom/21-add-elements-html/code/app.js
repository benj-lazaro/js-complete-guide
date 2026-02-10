const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
console.log(firstLi);

// Select the HTML element <section>
const section = document.querySelector("section");
const button = document.querySelector("button");

// Manually removes the assigned Classes from HTML <section>
// section.className = "";

button.addEventListener("click", () => {
  section.classList.toggle("invisible");
});

// Replace the HTML element <section> content mark-up
// section.innerHTML = "<h2> A new title! </h2>";

// Append a new child lement node of the Element node "ul" using the .innerHTML property workaround
const list = document.querySelector("ul");
list.innerHTML = list.innerHTML + "<li>Item 4</li>";
list.innerHTML = list.innerHTML + "<li>Item 5</li>";

// Select the HTML element <div>
const div = document.querySelector("div");

// Insert a new child Element node to the selected Element node "div"
div.insertAdjacentHTML("beforeend", "<p>Something went wrong!</p>");
