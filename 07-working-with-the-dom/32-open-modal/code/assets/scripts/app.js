// Select the hidden modal
const addMovieModal = document.getElementById("add-modal");

// Select the button "ADD MOVIE"
const startAddMovieButton = document.querySelector("header button");

// Select the backdrop
const backdrop = document.getElementById("backdrop");

// Select modal "cancel" button
const cancelModal = document.querySelector(".modal__actions").firstElementChild;

// Toggle the modal visibility
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

// Toggle the backdrop visibility
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

// Event handler
startAddMovieButton.addEventListener("click", toggleMovieModal);
cancelModal.addEventListener("click", toggleMovieModal);
