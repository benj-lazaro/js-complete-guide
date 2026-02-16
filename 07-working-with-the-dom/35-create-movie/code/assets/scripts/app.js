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

// An array that stores movie objects
const movies = [];

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

// Clears the modal's input fields
const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

// Callback function for the Element node "cancelAddMovieButton"
const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

// Callback function for the Element node "confirmAddMovieButton"
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  // Validate user inputs
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

  // Store user inputs in an object & push it to the array "movies"
  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);

  toggleMovieModal();
  clearMovieInput();
};

// Event handler
startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backgroundClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
