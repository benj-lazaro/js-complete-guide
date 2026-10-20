const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";

// Function that validates the value of a user input
function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }

  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

// Function that returns the assigned value of a HTML element <input>
function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

// Function that creates (& stores) a user account
function createUser(userName, userPassword) {
  if (
    !validate(userName, "REQUIRED") ||
    !validate(userPassword, "MIN_LENGTH", 5)
  ) {
    throw new Error(
      "Error: Empty username or short password length (min: 6 characters",
    );
  }

  return {
    username: userName,
    password: userPassword,
  };
}

// Function that simply displays the value of the property "username" in the console
function greetUser(user) {
  console.log(`Hi there! I'm ${user.username}.`);
}

// Function that handles the Event "submit"
function signUpHandler(event) {
  event.preventDefault();

  const enteredUserName = getUserInput("username");
  const enteredUserPassword = getUserInput("password");

  try {
    const newUser = createUser(enteredUserName, enteredUserPassword);
    greetUser(newUser);
    console.log(newUser);
  } catch (error) {
    alert(error.message);
  }
}

// Function that connects to the HTML element <form> in the DOM
function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);

  form.addEventListener("submit", formSubmitHandler);
}

connectForm("user-input", signUpHandler);
