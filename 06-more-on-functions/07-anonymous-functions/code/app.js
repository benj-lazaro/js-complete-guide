const startGameBtn = document.getElementById("start-game-btn");

// Anonymous function assigned to a constant variable
const start = function () {
  console.log("Game is starting...");
};

// Anonymous function declared in place as a callback function for an event listener
startGameBtn.addEventListener("click", function () {
  console.log("Gaming is starting...");
});
