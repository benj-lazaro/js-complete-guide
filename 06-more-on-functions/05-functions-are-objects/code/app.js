const startGameBtn = document.getElementById("start-game-btn");

// Callback function
function startGame() {
  console.log("Game is starting...");
}

// Event handler
startGameBtn.addEventListener("click", startGame);

// Proof that a Function is an Object
console.dir(startGame);
