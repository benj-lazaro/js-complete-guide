// Global variable
let userName = "Max";

function greetUser() {
  let userName = "Anna";

  console.log(`Hi ${userName}!`);
}

userName = "John Wick";

greetUser();
