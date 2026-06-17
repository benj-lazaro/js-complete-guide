const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // Prevents the default behavior of "submittin" the form data
  event.preventDefault();

  // Displays a "SubmitEvent" object on the JavaScript console
  console.log(event);
});

const div = document.querySelector("div");
div.addEventListener("click", (event) => {
  console.log("Clicked <div>");
  console.log(event);
});

const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Clicked <button>");
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

list.addEventListener("click", function (event) {
  event.target.closest("li").classList.toggle("highlight");

  // Triggers a "form" submission programatically by simulated a form submission
  // Skips the registered Event listner
  // form.submit();

  // Triggers a "form" submission programatically by simulated a mouse click
  // Executes the registered Event listener
  button.click();
  console.log(this);
});
