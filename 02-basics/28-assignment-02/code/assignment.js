const task3Element = document.getElementById("task-3");

// Task #1
function greet() {
  alert("Hello there!");
}

function greetUser(name) {
  alert(`Hi ${name}!`);
}

// Task #2
greet();
greetUser("Ivana");

// Task #3
task3Element.addEventListener("click", greet);

// Task #4
function threeNames(name1, name2, name3) {
  return `${name1}${name2}${name3}`;
}

// Task #5
alert(threeNames("Andie", "Barbara", "Ivana"));
