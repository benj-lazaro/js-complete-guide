// Select the hidden modal
const addMovieModal = document.getElementById("add-modal");

// Select the button "ADD MOVIE"
const startAddMovieButton = document.querySelector("header button");

// Select the backdrop
const backdrop = document.getElementById("backdrop");

// Select modal "cancel" button
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

// Toggle the backdrop visibility
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

// Toggle the modal visibility
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

// Toggle both modal & backdrop visibility
const backgroundClickHandler = () => {
  toggleMovieModal();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

// Event handler
startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backgroundClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
