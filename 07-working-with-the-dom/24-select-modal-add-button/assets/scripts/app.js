// Select modal element by ID attribute
const addMovieModal = document.getElementById("add-modal");

// Select button element by tag names
const startAddMovieButton = document.querySelector("header button");

// Listen to a "click" event to startAddMovieButton
// NOTE: This is my solution prior to the completion of this lesson
startAddMovieButton.addEventListener("click", () => {
  addMovieModal.classList.add("modal", "visible");
});
