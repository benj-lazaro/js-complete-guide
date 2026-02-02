// Task #1
const sayHello = (name) => console.log("Hi " + name);
sayHello("Max");

// Task #2
const sayHello1 = (greeting, name) => {
  console.log(`${greeting}, ${name}`);
};
sayHello1("Hello", "John Wick");

const sayHello2 = () => {
  console.log("Hello there, Mr. Anderson.");
};
sayHello2();

const sayHello3 = (name) => "Hi, " + name;
console.log(sayHello3("Rick"));

// Task #4
const sayHello4 = (name, greeting = "Hey there") => {
  console.log(`${greeting}, ${name}`);
};
sayHello4("Pickle Rick");
sayHello4("Pickle Rick", "Howdy");

// Task #4
const checkInput = (cb, ...textValue) => {
  let hasEmptyText = false;

  for (const text of textValue) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }

  if (!hasEmptyText) {
    cb();
  }
};

const emptyInput = () => {
  alert("NO argument passed.");
};

checkInput(
  () => {
    console.log("NO empty string argument value.");
  },
  "string_one",
  "string_two",
);
