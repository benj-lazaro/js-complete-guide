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

// Select the "Your personal movie database!" <section> element
const entryTextSection = document.getElementById("entry-text");

// Select the modal element for deletion confirmation of a movie element from DOM
const deleteMovieModal = document.getElementById("delete-modal");

// Define a function expression that updates the UI
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

// Define a function expression that deletes the specified movie element from the DOM / UI
const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;

  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }

  // Remove the idenified movie element from NodeList using .splice()
  // The 2nd argument referes to the number of item(s) to be removed
  movies.splice(movieIndex, 1);

  // Remove the identified movie element from the DOM
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
};

// Define a function expression for the cancellation of a movie element's deletion
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

// Define a function expression that confirms the deletion of a movie element
const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();

  // Select the modal element's buttons
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  const confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  // Add event listners & corresponding callback functions to the buttons
  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

// Define a function expression that adds a movie to the UI
const renderNewMovieElement = (id, title, imageUrl, rating) => {
  // Create a movie element
  const newMovieElement = document.createElement("li");

  // Configure created movie element's properties
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

  // Add a "click" event listener to the movie element
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );

  // Render the movie element on the DOM
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

// Define a function expression that renders the backdrop on the browser
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

// Define a function expression that closes the modal element
const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

// Define callback function expression for the enable the add movie modal element to appear
const showMovieModal = () => {
  addMovieModal.classList.add("visible");
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
  closeMovieModal();
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
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  // Save JavaScript object, close off the modal element & clear its fields
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

// Define a callback function expression that toggles off the backdrop & the modal element
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
};

// Add a "click" event listener to the "Add Movie" button
startAddMovieButton.addEventListener("click", showMovieModal);

// Add a "click" event listener to the backdrop element
backdrop.addEventListener("click", backdropClickHandler);

// Add a "click" event listenet to the modal element's "Cancel" button
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);

// Add a "click" event listener to the modal element's "Add" button
confirmAddMovieButton.addEventListener("click", addMovieHandler);
