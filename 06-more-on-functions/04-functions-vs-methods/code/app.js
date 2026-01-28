const startGameBtn = document.getElementById("start-game-btn");

// Callback function
function startGame() {
  console.log("Game is starting...");
}

// Event handler
startGameBtn.addEventListener("click", startGame);

// Defining a Method in an Object
const person = {
  userName: "Max",
  greet: function () {
    console.log("Hello there");
  },
};

// Accessing a Property of an Object
console.log(person.userName);

// Executing a Method of an Object
person.greet();
