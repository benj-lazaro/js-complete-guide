// DOM elements selection
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Global constants / variables
const movies = [];

// Functions
const renderMovies = (filter = "") => {
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

  // If fitler value is falsy, render all movie objects
  // Otherwise, render the movie based on the value of the argument variable filter
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  // Access the static & dynamic properties of the passed movie object(s)
  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");

    // Retrieve the movie object's static property title
    let text = movie.info.title + " - ";

    // Retrieve the movie object's dynamic user-supplied proerty
    for (const key in movie.info) {
      if (key !== "title") {
        text += `${key}: ${movie.info[key]}`;
      }
    }

    // Define the textContent property of the child <li> element
    movieElement.textContent = text;

    // Append created child <li> element to the parent <ul>
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
    id: Math.random().toString(), // Chaining Math.random() & .toString methods
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  console.log(filterTerm);
  renderMovies(filterTerm);
};

// Event listners
addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
