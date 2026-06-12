const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // Prevents the default behavior of "submittin" the form data
  event.preventDefault();

  // Displays a "SubmitEvent" object on the JavaScript console
  console.log(event);
});
