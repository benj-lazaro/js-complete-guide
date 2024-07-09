// DOM targets
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Movie objects storage
const movies = [];

// Define handler functions
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  // Validate entries and if any of the fields is empty do nothing
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  // Construct a new object using the object literal notation
  const newMovie = {
    info: {
      title, // Same as title: title
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  // Push movie object into the array
  movies.push(newMovie);

  console.log(newMovie);
  console.log("Movie array", movies);
};

// Attach event "click" listener
addMovieBtn.addEventListener("click", addMovieHandler);
