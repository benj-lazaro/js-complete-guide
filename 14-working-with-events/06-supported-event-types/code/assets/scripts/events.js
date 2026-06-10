// Select ALL HTML element <button>
const buttons = document.querySelectorAll("button");

// Callback Arrow function (Event handler)
const buttonClickHandler = (event) => {
  // Displays the specialized "Event" object (i.e. PointerEvent)
  console.log(event);
};

// Event "mouseenter"
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", buttonClickHandler);
});

// Event "scroll"
window.addEventListener("scroll", (event) => {
  console.log(event);
});
