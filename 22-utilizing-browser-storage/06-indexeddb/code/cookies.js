const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// Store data on cookies
storeBtn.addEventListener("click", () => {
  const userId = "uid123";

  const user = {
    name: "John Wick",
    age: 60,
    hobbies: ["Pencil-fu", "Shooting"],
  };

  // Store data in cookies & set data's maximum age to 5 seconds
  document.cookie = `uid=${userId}; max-age=5`;

  // Store data in cookie & set to expire in
  // document.cookie = `uid=${userId}; expires=<later_date>`;

  // Store JSON data in cookies
  document.cookie = `user=${JSON.stringify(user)}`;
});

// Retrieve data from cookies
retrieveBtn.addEventListener("click", () => {
  // Split retrieved data & store as an individual array element
  const cookieData = document.cookie.split(";");

  // Remove excess prefix whitespace character from each array element
  const cleanedData = cookieData.map((element) => {
    return element.trim();
  });

  console.log(cleanedData);

  // Use index select a specific data in cookies
  // Use the string method ".split()" on the specific data to fetch the key & value
  console.log(cleanedData[1].split("="));

  // Retrieve the value ONLY of 2nd array element based on its key
  console.log(cleanedData[1].split("=")[1]);
});
