"use strict";

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

    // Fetch the info property from the movie object using object destructuring
    // The ... (rest) operator can be used to collect other properties (besides "info") i.e. the id property
    const { info, ...otherProperties } = movie;
    console.log(otherProperties);

    // Using object destructuring to pull a specific property from an object
    // Assign pulled property to a new variable
    // const { title: movieTitle } = info;

    // Pull .getFormattedTitle() method from the object
    let { getFormattedTitle } = movie;

    // Use .bind() to pre-configure what "this" will refer to
    // Pass the object movie in order for "this" to point to the object movie
    // getFormattedTitle = getFormattedTitle.bind(movie);

    // Retrieve the movie object's static property title using the .call() method
    // It immediately executes the function right away; "this" refers
    // let text = getFormattedTitle().call(movie) + " - ";

    // Retrieve the movie object's static property title using the .apply() method
    let text = getFormattedTitle.apply(movie) + " - ";

    // Retrieve the movie object's dynamic user-supplied proerty
    for (const key in info) {
      if (key !== "title") {
        text += `${key}: ${info[key]}`;
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
    // Method shorthand
    getFormattedTitle() {
      // The "this" in the return statement does NOT automatically refers to the newMovie object
      // Rather it refers to the object that called the .getFormattedTitle() method of the newMovie object
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = function () {
  console.log("Calling within searchMovieHandler");
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  console.log(filterTerm);
  renderMovies(filterTerm);
};

// Event listners
addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
