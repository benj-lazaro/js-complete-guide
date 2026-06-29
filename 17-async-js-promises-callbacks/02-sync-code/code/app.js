// Each line of code is executed in sequence (NOT simultaenously)
const button = document.querySelector("button");
const output = document.querySelector("p");

// Callback function
function trackUserHandler() {
  console.log("Clicked!");
}

// Hook-up an Event listener for "click"
button.addEventListener("click", trackUserHandler);
