const startGameBtn = document.getElementById("start-game-btn");

start(); // Triggers an "Uncaught ReferenceError"; accessing prior initialization

// Function expression stored in a constant
const start = function () {
  console.log("Game is starting...");
};

// Event handler
startGameBtn.addEventListener("click", start);
