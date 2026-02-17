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

// Select the HTML element <section>
const entryTextSection = document.getElementById("entry-text");

// Select the HTML element <div> that houses the delete modal
const deleteMovieModal = document.getElementById("delete-modal");

// An array that stores movie objects
const movies = [];

// Hides the Element node "entryTextSection"
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

// Deletes the specified element from the "movies" array
const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;

  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }

  // Remove the matching element from the array "movies"
  movies.splice(movieIndex, 1);

  // Delete the movie from the DOM
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

// Callback function that shows deletion modal & asks for deletion confirmation
const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();

  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  // Replace the Element node w/ a deep clone
  // Effectively removes old Event listener w/ a callback function chained w/ the method ".bind()"
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  // Removes previous Event listner
  cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);

  // Assign new Event listeners
  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId),
  );
};

// Renders movie item as an HTML element <li>
const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}" />
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;

  // Local Event handler for removing a movie from the list
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id),
  );

  // Select the root HTML element <ul> & append new movie item
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

// Toggles the backdrop's visibility
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

// Callback function for the Element node "startAddMovieButton"
const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

// Callback function for the Element node "backdrop"
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

// Clears the modal's input fields
const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

// Callback function for the Element node "cancelAddMovieButton"
const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
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
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);

  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();

  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating,
  );
  updateUI();
};

// Event handler
startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
