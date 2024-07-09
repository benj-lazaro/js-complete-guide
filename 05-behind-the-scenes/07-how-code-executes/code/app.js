// Anonymous function get pushed into the stack first

function getName() {
  return prompt("Your name: ", ""); // prompt() get pushed into the stack fourth
}

function greet() {
  const userName = getName(); // getName() get pushed into the stack third
  console.log("Hello " + userName);
}

greet(); // greet() get pushed into the stack second

// Items in the stack gets pop off after it completes its execution
