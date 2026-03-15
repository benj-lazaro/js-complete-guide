// Object literal notation
const person = {
  "first name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hello there!");
  },
};

console.log(person);

// Use Square bracket notation to access the special propery "first name"
console.log(`First Name: ${person["first name"]}`);

// Select the HTML element from the document w/ the id "movie-list"
const movieList = document.getElementById("movie-list");
console.log(movieList);

// Access the Element node's property "style.display" & assign "block"
movieList.style.display = "block";

// Access the Element node's property "background-color" using Square bracket notation
movieList.style["background-color"] = "purple";
