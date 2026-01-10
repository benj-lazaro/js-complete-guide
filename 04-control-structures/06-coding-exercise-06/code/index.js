let userCategory; // should be 'child', 'adult' or 'senior'
let age = 30;

function solve() {
  // Todo: Set userCategory conditionally
  // Important: You must put your condition into this solve function!
  if (age < 18) {
    userCategory = "child";
  } else if (age >= 18 && age < 65) {
    userCategory = "adult";
  } else {
    userCategory = "senior";
  }
}
