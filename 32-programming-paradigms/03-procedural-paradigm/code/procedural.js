const form = document.getElementById("user-input");

function signUpHandler(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.trim().length === 0) {
    alert("Error: Username MUST NOT be empty!");
    return;
  }

  if (password.trim().length <= 5) {
    alert("Error: Password MUST be 6 character or more!");
    return;
  }

  const userAccount = {
    name: username,
    password: password,
  };

  console.log(userAccount);
  console.log(`Hi, I am ${username}!`);
}

form.addEventListener("submit", signUpHandler);
