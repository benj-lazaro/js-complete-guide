// Select the target HTML element
const button = document.querySelector("button");

// Callback Arrow function
const buttonClickHandler = () => {
  alert("Button was clicked!");
};

const anotherButtonClickHandler = () => {
  console.log("Button was clicked");
};

// Alternate (but limited) way of adding an Event listener
// button.onclick = buttonClickHandler;

// Overwrites the previous callback function (Event handler)
// button.onclick = anotherButtonClickHandler;

// Recommended way
button.addEventListener("click", buttonClickHandler);
button.addEventListener("click", anotherButtonClickHandler);

button.removeEventListener("click", anotherButtonClickHandler);
