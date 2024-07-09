const startGameBtn = document.getElementById("start-game-btn");

// Function Expression = stores a function to a constant variable
// The formerly named function losses its global scope coverage & became local within the constant
const start = function () {
  console.log("Game is starting...");
};

startGameBtn.addEventListener("click", start);
