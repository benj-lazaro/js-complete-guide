// Each line of code is executed in sequence (NOT simultaenously)
const button = document.querySelector("button");
const output = document.querySelector("p");

// Browser hands-over task of handling a "click" event to the JavaScript thread
function trackUserHandler() {
  console.log("Clicked!");
}

// JavaScript thread hands over Event listener to the browser
// While waiting for a "click" event to occur
button.addEventListener("click", trackUserHandler);
