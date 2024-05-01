// Select modal element by ID attribute
const addMovieModal = document.getElementById("add-modal");

// Select button element by tag names
const startAddMovieButton = document.querySelector("header button");

// Define callback function expression for the toggling of the modal element
const toggleMovieModal = () => {
  // Add the CSS class that renders the modal element on the browser
  addMovieModal.classList.toggle("visible");
};

// Add an event listener to the button for a "click" event
startAddMovieButton.addEventListener("click", toggleMovieModal);
