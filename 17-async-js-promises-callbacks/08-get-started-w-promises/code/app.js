const button = document.querySelector("button");
const output = document.querySelector("p");

// Wrap the non-promise function "setTimeout()" w/in a "Promise" object
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
  navigator.geolocation.getCurrentPosition(
    (positionData) => {
      setTimer(2000).then((data) => {
        console.log(data, positionData);
      });
    },
    (error) => console.log(error),
  );

  setTimer(0).then((data) => {
    console.log(data);
  });

  // Immediately executes BEFORE the "setTimer()" calls
  console.log("Getting user position...");
}

// JavaScript offloads the Event listener & callback function to the browser's Event Loop
button.addEventListener("click", trackUserHandler);
