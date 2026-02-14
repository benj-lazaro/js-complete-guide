// Select the hidden modal
const addMovieModal = document.getElementById("add-modal");

// Select the button "ADD MOVIE"
const startAddMovieButton = document.querySelector("header button");

// Select the backdrop
const backdrop = document.getElementById("backdrop");

// Select modal "cancel" button
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

// Toggles the backdrop visibility
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

// Callback function for the Element node "startAddMovieButton"
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

// Callback function for the Element node "backdrop"
const backgroundClickHandler = () => {
  toggleMovieModal();
};

// Callback function for the Element node "cancelAddMovieButton"
const cancelAddMovie = () => {
  toggleMovieModal();
};

// Event handler
startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backgroundClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
