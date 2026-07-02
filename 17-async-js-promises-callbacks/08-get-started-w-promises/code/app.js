const button = document.querySelector("button");
const output = document.querySelector("p");

// Wraps a non-promise function & method w/in a "Promise" object
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Timeout Done!");
    }, duration);
  });

  return promise;
};

// Callback function
function trackUserHandler() {
  // Offloads method to the browser
  navigator.geolocation.getCurrentPosition(
    (positionData) => {
      setTimer(2000).then((data) => {
        console.log(data, positionData);
      });
    },
    (error) => console.log(error),
  );

  // Offloads the timeout to the browser w/ 0ms delay
  setTimer(0).then((data) => {
    console.log(data);
  });

  // Immediately executes BEFORE the two (2) promise calls
  console.log("Getting user position...");
}

// JavaScript offloads the Event listener & callback function to the browser's Event Loop
button.addEventListener("click", trackUserHandler);
