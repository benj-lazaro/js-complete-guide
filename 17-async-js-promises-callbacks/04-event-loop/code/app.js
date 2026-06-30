// JavaScript registers the global constants
const button = document.querySelector("button");
const output = document.querySelector("p");

// JavaScript registers the callback function & then offloads it to the browser's Event loop
// Event Loop registers the callback function as a message on it's Message Queue
function trackUserHandler() {
  console.log("Clicked!");
}

// JavaScript offloads the Event listener to the browser's Event loop
// Perpetually checks if the
// Registered Event occurred, JavaScript call stack is empty & pending messages(s) on Message Queue
// If ALL conditions are true, it hands over the message to the JavaScript's call stack
button.addEventListener("click", trackUserHandler);

// JavaScript immediately executes the following code rught after the Event listener is offloaded
// If an "click" Event occurred, the callback executes ONLY after the completion of the following code
let result = 0;
for (let index = 0; index < 1000000; index++) {
  result += 1;
}
console.log(result);
