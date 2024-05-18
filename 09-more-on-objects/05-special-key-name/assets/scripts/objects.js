// Define an object with unique property
let person = {
  "first-name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },
};

console.log(person);

// Accessing key / property name using square bracket notation
console.log(person["first-name"]);

// Square bracket notation can also be used when accessing & manipulating properties of DOM elements
const movieList = document.getElementById("movie-list");

// movieList.style.backgroundColor = "red";
// movieList.style.display = "block";

movieList.style["background-color"] = "red"; // Using the proper CSS property name
movieList.style["display"] = "block";
