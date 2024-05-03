// Select the hidden modal element
const addMovieModal = document.getElementById("add-modal");

// Select the "ADD MOVIE" button
const startAddMovieButton = document.querySelector("header button");

// Select the backdrop element
const backdrop = document.getElementById("backdrop");

// Select the "Cancel" and "Add" buttons within the modal element
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

// Stores the user's inputs from the <input> elements within the modal element as a NodeList
const userInputs = addMovieModal.querySelectorAll("input");

// Store the individual objects (movie entry) taken from the modal element
const movies = [];

// Define a function expression that renders the backdrop on the browser
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

// Define callback function expression for the toggling of the modal element
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

// Define a function expression that clears the <input> elements of the modal
const clearMovieInput = () => {
  for (userInput of userInputs) {
    userInput.value = "";
  }
};

// Define a callback function expression that toggles off the modal element & clear its fields
const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

// Define a callback function expression that collects the user's input from the NodeList
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  // Check for empty strings and/or invalid rating values
  // NOTE: Placing a "+" before a variable converts its value to a number data type
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  // Create corresponding JavaScript object that will store the movie entry
  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  // Save JavaScript object, toggle off the modal element & clear its fields
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
};

// Define a callback function expression that toggles off the backdrop & the modal element
const backdropClickHandler = () => {
  toggleMovieModal();
};

// Add a "click" event listener to the "Add Movie" button
startAddMovieButton.addEventListener("click", toggleMovieModal);

// Add a "click" event listener to the backdrop element
backdrop.addEventListener("click", backdropClickHandler);

// Add a "click" event listenet to the modal element's "Cancel" button
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);

// Add a "click" event listener to the modal element's "Add" button
confirmAddMovieButton.addEventListener("click", addMovieHandler);
