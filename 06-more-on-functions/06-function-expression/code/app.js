const startGameBtn = document.getElementById("start-game-btn");

// Function expression stored in a constant
const start = function () {
  console.log("Game is starting...");
};

// Event handler
startGameBtn.addEventListener("click", start);
