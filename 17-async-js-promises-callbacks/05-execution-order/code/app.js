const button = document.querySelector("button");
const output = document.querySelector("p");

// Callback function
function trackUserHandler() {
  // Offloads method to the browser
  navigator.geolocation.getCurrentPosition(
    (positionData) => console.log(positionData),
    (error) => console.log(error),
  );

  // Immediately executes line of code BEFORE the method ".getCurrentPosition()" completes its run
  console.log("Getting user position...");
}

// JavaScript offloads the Event listener & callback function to the browser's Event Loop
button.addEventListener("click", trackUserHandler);
