// Query DOM element node(S)
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Store "newMovie" object(s)
const movies = [];

// Callback function(s)
const renderMovie = () => {
  // Parent HTML element <ul>
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  // This line is NOT an ideal implementation
  movieList.innerHTML = "";

  // Render each object as a child <li> of the parent HTML element <ul>
  movies.forEach((movie, index, movies) => {
    const movieElement = document.createElement("li");

    movieElement.textContent = movie.info.title;
    movieList.appendChild(movieElement);
  });
};

const clearUserInput = () => {
  const userInputs = document.querySelectorAll(".control input");

  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  // User input validation
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  // Create the object
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  // Store the object
  movies.push(newMovie);

  clearUserInput();

  renderMovie();
};

// Event handler(s)
addMovieBtn.addEventListener("click", addMovieHandler);
