// let userName = "Max";

// function greet() {
//   let age = 40;
//   let userName = "Manuel";

//   console.log(userName, age);
// }

// console.log(age); // ReferenceError
// greet();

// ==================
// Global scope
var userName = "Max";

if (userName === "Max") {
  var hobbies = ["cooking", "sports"];
  console.log(hobbies);
}

function greet() {
  var age = 40;
  var userName = "Manuel";

  console.log(userName, age, hobbies);
}

console.log(userName, hobbies);
greet();
