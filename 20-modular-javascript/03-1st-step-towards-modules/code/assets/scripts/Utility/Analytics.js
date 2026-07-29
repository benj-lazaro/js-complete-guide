// Executes the mock-up analytics every 2000ms
const intervalId = setInterval(() => {
  console.log("Sending analytics...");
}, 2000);

// Hookup an Event listener that halts the "setInterval()" execution
document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
