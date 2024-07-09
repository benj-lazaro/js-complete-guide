const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
// Select the cancel button within the modal element
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

// Define a function expression that renders the backdrop on the browser
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

// Define callback function expression for the toggling of the modal element
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

// Define a callback function expression that toggles off the modal element
const cancelAddMovie = () => {
  toggleMovieModal();
};

// Define a callback function expression that toggles off the backdrop & the modal element
const backdropClickHandler = () => {
  toggleMovieModal();
};

// Add a "click" event listener to the "Add Movie" button
startAddMovieButton.addEventListener("click", toggleMovieModal);

// Add a "click" event listener to the backdrop element
backdrop.addEventListener("click", backdropClickHandler);

// Add a "click" event listenet to the modal element's cancel button
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
