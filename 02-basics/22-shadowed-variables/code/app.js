// Global scope variable
let userName = "Max";

function greetUser(name) {
  // Local scope variable does NOT overwrite its Global scope twin
  let userName = name;

  alert(userName);
}

// Assigns a new value to the Global scope variable
userName = "Manu";

// Argument value passed to the Local scope variable inside the function
greetUser("Max");
