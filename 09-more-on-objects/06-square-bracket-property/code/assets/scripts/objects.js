// Object literal notation
const person = {
  "first name": "Max",
  age: 30,
  greet: function () {
    alert("Hello there!");
  },
  "job-title": "Full-stack web developer",
};

// Access the key using the square bracket notation
console.log(`First Name: ${person["first name"]}`);
console.log(`Job Title: ${person["job-title"]}`);

// Working w/ DOM Element nodes
const movieList = document.getElementById("movie-list");
console.log(movieList);

// Access the Element node's "style" object
movieList.style.display = "block";

// Access the CSS property "background-color" using the square bracket notation
movieList.style["background-color"] = "purple";
