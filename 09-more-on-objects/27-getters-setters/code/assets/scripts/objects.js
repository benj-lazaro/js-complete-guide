// Query DOM element node(S)
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Store "newMovie" object(s)
const movies = [];

// Helper functions
const renderMovies = (filter = "") => {
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

  const filteredMovie = !filter
    ? movies
    : movies.filter((movie, index, movies) =>
        movie.info.title.includes(filter),
      );

  // Render each object as a child <li> of the parent HTML element <ul>
  filteredMovie.forEach((movie, index, movies) => {
    const movieElement = document.createElement("li");

    // Deconstruct the object "movie"
    // Extract the property "info" & store the rest in "otherProps"
    const { info, ...otherProps } = movie;
    console.log(otherProps);

    // Deconstruct the nested object stored in the property "info"
    // Extract the property "title" & store it under a new name "movieTitle"
    // const { title: movieTitle } = info;

    // Extract the method "getFormattedTitle" from the object "movie"
    let { getFormattedTitle } = movie;

    // Bind the method "getFormattedTitle" w/ the object "movie"
    // getFormattedTitle = getFormattedTitle.bind(movie);

    // Calls the method ".getFormattedTitle"
    // Uses either ".call()" or ".apply()" to identify the object that "this" refers to
    let text = getFormattedTitle.call(movie) + " - ";

    // Iterate through the dynamic property
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${info[key]}`;
      }
    }

    movieElement.textContent = text;
    movieList.append(movieElement);
  });
};

const clearUserInput = () => {
  const userInputs = document.querySelectorAll(".control input");

  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

// Callback function(s)
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  // User input validation
  if (extraName.trim() === "" || extraValue.trim() === "") {
    return;
  }

  // Create the object
  const newMovie = {
    set title(value) {
      if (value.trim === "") {
        this._title = "DEFAULT";
        return;
      }
      this._title = value;
    },

    get title() {
      return this._title;
      // return this.title.toUpperCase();
    },

    info: {
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  // Triggers the Setter from w/in newMovie
  newMovie.info.title = title;

  // Triggers the Getter from w/in newMovie
  console.log(newMovie.info.title);

  // Store the object
  movies.push(newMovie);

  clearUserInput();
  renderMovies();
};

const searchMovieHandler = function () {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;

  renderMovies(filterTerm);
};

// Event handler(s)
addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
