const button = document.querySelector("button");
const output = document.querySelector("p");

// Wrap the non-promise method ".getCurrentPosition()" w/in a "Promise" object
const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success); // Contains fetched position data
      },
      (error) => {},
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
function trackUserHandler() {
  let position;

  // Promise chaining implementation
  getPosition()
    .then((positionData) => {
      position = positionData;
      return setTimer(2000);
    })
    .then((data) => {
      console.log(data, position);
    });

  setTimer(1000).then((data) => {
    console.log(data);
  });

  // Immediately executes BEFORE the two (2) promise object
  console.log("Getting user position...");
}

// JavaScript offloads the Event listener & callback function to the browser's Event Loop
button.addEventListener("click", trackUserHandler);
