const startGameBtn = document.getElementById("start-game-btn");

// Stand-alone / normal function
function startGame() {
  console.log("Game is starting...");
}

// Directly executes the function
// startGame();

// Indirectly executes the function
// Pass the function as an argument value to the method .addEventListener()
startGameBtn.addEventListener("click", startGame);

// A function declared as a property of an object i.e. method
// const person = {
//   name: "Max",
//   greet: function greet() {
//     console.log("Hello there!");
//   },
// };

// Calls the method .greet()
// person.greet();

// Access the property "name" from the object person
// console.log("My name is ", person.name);
