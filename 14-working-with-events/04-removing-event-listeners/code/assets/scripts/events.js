// Select the target HTML element
const button = document.querySelector("button");

// Callback Arrow function (Event handler)
const buttonClickHandler = () => {
  alert("Button was clicked!");
};

const anotherButtonClickHandler = () => {
  console.log("Button was clicked");
};

// Workaround when using method ".bind()" & keyword "this"
const boundFn = buttonClickHandler.bind(this);

// Recommended way of adding an Event listener
button.addEventListener("click", boundFn);

// Remove Event listener after 3000ms (3s)
setTimeout(() => {
  // Recommended way of removing an Event listener
  button.removeEventListener("click", boundFn);
  console.log("Event handler removed...");
}, 3000);
