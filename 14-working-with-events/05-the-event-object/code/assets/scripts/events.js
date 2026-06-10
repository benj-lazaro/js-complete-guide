// Select ALL HTML element <button>
const buttons = document.querySelectorAll("button");

// Callback Arrow function (Event handler)
const buttonClickHandler = (event) => {
  // Disables the target Element node from being triggered by an event again
  event.target.disabled = true;

  // Displays the specialized "Event" object (i.e. PointerEvent)
  console.log(event);
};

// Iterate through ALL selected Element nodes & individually register an Event handler
buttons.forEach((btn) => {
  btn.addEventListener("click", buttonClickHandler);
});
