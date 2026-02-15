// Select the hidden modal
const addMovieModal = document.getElementById("add-modal");

// Select the button "ADD MOVIE"
const startAddMovieButton = document.querySelector("header button");

// Select the backdrop
const backdrop = document.getElementById("backdrop");

// Select modal's button "Cancel"
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

// Select modal's button "Add"
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

// Select modal's HTML element <input>
const userInputs = addMovieModal.querySelectorAll("input");

// Toggles the backdrop's visibility
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
const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

// Callback function for the Element node "confirmAddMovieButton"
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid value (rating between 1 & 5)");
    return;
  }
};

// Event handler
startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backgroundClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
