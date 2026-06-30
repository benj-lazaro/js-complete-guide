const button = document.querySelector("button");
const output = document.querySelector("p");

// Callback function
function trackUserHandler() {
  // Offloads method to the browser
  navigator.geolocation.getCurrentPosition(
    (positionData) => {
      // Additional 2ms (2 seconds) delay
      setTimeout(console.log(positionData), 2000);
    },
    (error) => console.log(error),
  );

  // Offloads the timeout to the browser w/ 0ms delay
  setTimeout(() => {
    console.log("Timer done...");
  }, 0);

  // Immediately executes BEFORE the ".getCurrentPosition()" & "setTimeout()" is done
  console.log("Getting user position...");
}

// JavaScript offloads the Event listener & callback function to the browser's Event Loop
button.addEventListener("click", trackUserHandler);
