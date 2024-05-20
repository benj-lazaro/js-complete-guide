// DOM elements selection
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Global constants / variables
const movies = [];

// Functions
const renderMovies = () => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("li");
    movieElement.textContent = movie.info.title;
    movieList.append(movieElement);
  });
};

// Event handlers
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, // Property shorthand; same as title: title
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  renderMovies();

  console.log(newMovie);
};

// Event listners
addMovieBtn.addEventListener("click", addMovieHandler);
