const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// Store data on cookies
storeBtn.addEventListener("click", () => {
  const userId = "uid123";

  document.cookie = `uid=${userId}`;
});

// Retrieve data from cookies
retrieveBtn.addEventListener("click", () => {
  console.log(document.cookie);
});
