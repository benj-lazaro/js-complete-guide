let userName = "Max"; // Block scoped variable, available globally

if ((userName = "Max")) {
  let hobbies = ["Sports", "Cooking"]; // Block scoped variable, available within the if statement
  console.log(hobbies);
}

function greet() {
  let age = 30; // Block scoped variable, available ONLY within the function
  let userName = "Manuel"; // Shadow userName & redeclare with a new value
  console.log(userName, age); // Returns Manuel & 30
}

// console.log(userName, age); // Returns a ReferenceError, age is not defined
console.log(userName, hobbies); // Returns a ReferenceError, hobbies is not defined

greet();
