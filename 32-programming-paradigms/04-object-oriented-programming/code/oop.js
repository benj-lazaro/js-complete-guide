// Class that validates user input value(s)
class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";

  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }

    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

// Class that stores user account(s)
class User {
  constructor(userName, userPassword) {
    this.username = userName;
    this.password = userPassword;
  }

  greet() {
    console.log(`Hi there! I'm ${this.username}.`);
  }
}

// Class that handles user input value(s)
class UserInputForm {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userName = document.getElementById("username");
    this.userPassword = document.getElementById("password");

    this.form.addEventListener("submit", this.signUpHandler.bind(this));
  }

  signUpHandler(event) {
    event.preventDefault();

    const enteredUserName = this.userName.value;
    const enteredPassword = this.userPassword.value;

    if (
      !Validator.validate(enteredUserName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
    ) {
      alert(
        "Error: Empty username or short password length (min: 6 characters",
      );
      return;
    }

    const user = new User(enteredUserName, enteredPassword);
    console.log(user);
    user.greet();
  }
}

new UserInputForm();
