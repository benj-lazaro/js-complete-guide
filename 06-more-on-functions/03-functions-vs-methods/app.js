const startGameBtn = document.getElementById("start-game-btn");

// Function declaration
function startGame() {
  console.log("Game is starting...");
}

// Direct execution of a function
// startGame();

// Indirect execution of a function
startGameBtn.addEventListener("click", startGame);

// A function inside an object = method
const person = {
  name: "Max",
  greet: function greet() {
    console.log("Hello there!");
  },
};

// Calling method .greet() of the person object
person.greet();

// Access .name property of the person object
console.log("My name is ", person.name);
