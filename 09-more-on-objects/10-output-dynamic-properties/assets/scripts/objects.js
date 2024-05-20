// DOM elements selection
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Global constants / variables
const movies = [];

// Functions
const renderMovies = () => {
  const movieList = document.getElementById("movie-list");

  // Check for pre-existing movie objects in the array
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  // Clear all child <li> elements from the parent <ul> element
  movieList.innerHTML = "";

  // Access the static & dynamic properties of the movie object
  movies.forEach((movie) => {
    const movieElement = document.createElement("li");
    // Retrieve the static property (title)
    let text = movie.info.title + " - ";

    // Retrieve the dynamic (user-supplied) proerty
    for (const key in movie.info) {
      if (key !== "title") {
        text += `${key}: ${movie.info[key]}`;
      }
    }

    movieElement.textContent = text;
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
