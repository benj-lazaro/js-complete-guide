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
  let positionData;
  let timerData;

  // Concise Promise Chaining error handling
  try {
    positionData = await getPosition(); // If this "Promise" object failed
    timerData = await setTimer(2000); // This "Promise" object will NOT execute
  } catch (error) {
    positionData = "No data..."; // Prevents "undefined" value
    timerData = "No data...";
    console.log(error);
  }

  console.log(timerData, positionData);
}

// JavaScript offloads the Event listener & callback function to the browser's Event Loop
button.addEventListener("click", trackUserHandler);
