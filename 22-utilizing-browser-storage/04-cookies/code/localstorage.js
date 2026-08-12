const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// Data for sessionStorage
const userId = "user123";

// JSON data for localStorage
const user = {
  name: "John Wick",
  age: 60,
  hobbies: ["Pencil-fu", "Shooting"],
};

// Store data on both localStorage & sessionStorage
storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("UID", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

// Retrieve data from both localStorage & sessionStorage
retrieveBtn.addEventListener("click", () => {
  const extractedUserId = sessionStorage.getItem("UID");
  const extractedUser = JSON.parse(localStorage.getItem("user"));

  if (extractedUserId) {
    console.log(`User ID: ${extractedUserId}`);
  } else {
    console.log("User ID NOT found");
  }

  if (extractedUser) {
    console.log(extractedUser);
  } else {
    console.log("User NOT found");
  }
});
