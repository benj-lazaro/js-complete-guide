const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // Prevents the default behavior of "submittin" the form data
  event.preventDefault();

  // Displays a "SubmitEvent" object on the JavaScript console
  console.log(event);
});

// Enforces the execution order "Capturing" phase 1st before the "Bubbling" phase
const div = document.querySelector("div");
div.addEventListener("click", (event) => {
  console.log("Clicked <div>");
  console.log(event);
});

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Clicked <button>");
  console.log(event);
});

const listItems = document.querySelectorAll("li");

// Bad for performance & memory perspective due to multiple Event listeners
// listItems.forEach((listItem) =>
//   listItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   }),
// );

const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
});
