const startGameBtn = document.getElementById("start-game-btn");

// Function declaration
function startGame() {
  console.log("Game is starting...");
}

startGameBtn.addEventListener("click", startGame);

const person = {
  name: "Max",
  greet: function greet() {
    console.log("Hello there!");
  },
};

person.greet();
console.log("My name is ", person.name);

console.log("=========");

// To prove that startGame function is a function
console.log("The startGame is a ", typeof startGame);

// To prove that startGame function is an object
console.dir(startGame);
