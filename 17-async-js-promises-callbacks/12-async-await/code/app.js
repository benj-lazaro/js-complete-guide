const button = document.querySelector("button");
const output = document.querySelector("p");

// Wrap the non-promise method ".getCurrentPosition()" w/in a "Promise" object
const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success); // Contains fetched position data
      },
      (error) => {
        reject(error); // Contains error message
      },
      options,
    );
  });
  return promise;
};

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
async function trackUserHandler() {
  // Concise Promise Chaining
  const positionData = await getPosition(); // Get geolocation position
  const timerData = await setTimer(2000); // Wait for 2s

  console.log(timerData, positionData);
}

// JavaScript offloads the Event listener & callback function to the browser's Event Loop
button.addEventListener("click", trackUserHandler);
