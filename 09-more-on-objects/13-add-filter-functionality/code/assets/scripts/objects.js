// Query DOM element node(S)
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Store "newMovie" object(s)
const movies = [];

// Callback function(s)
const renderMovies = (filter = "") => {
  // Parent HTML element <ul>
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  // Clears the existing HTML mark-up content
  // NOTE: This line is NOT an ideal implementation
  movieList.innerHTML = "";

  // Select movie titles that matches the filter word
  // If NO "filter" is passed, it renders ALL movies
  const filteredMovie = !filter
    ? movies
    : movies.filter((movie, index, movies) =>
        movie.info.title.includes(filter),
      );

  // Iterate through the "filtered" movies, render each as a child <li> of the parent <ul>
  filteredMovie.forEach((movie, index, movies) => {
    const movieElement = document.createElement("li");

    // Fetch the property "title"
    let text = movie.info.title + " - ";

    // Iterate through the dynamic property
    for (const key in movie.info) {
      if (key !== "title") {
        // Append the dynamic property & its assigned value w/ "title"
        text = text + `${key}: ${movie.info[key]}`;
      }
    }

    movieElement.textContent = text;
    movieList.append(movieElement);
  });
};

// Clears the input fields after the button "Add Movie" is clicked
// NOTE: This is my implementation
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
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;

  renderMovies(filterTerm);
};

// Event handler(s)
addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
