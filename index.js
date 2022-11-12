const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordTwo = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkInputs() {
  const userNameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordTwoValue = passwordTwo.value.trim();

  if (userNameValue === "") {
    setError(username, "Username field cannot be empty.");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email field cannot be empty.");
  } else if (!validateEmail(emailValue)) {
    setError(email, "Email is not valid.");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password field cannot be empty.");
  } else {
    setSuccess(password);
  }

  if (passwordTwoValue === "") {
    setError(passwordTwo, "Confirm password field cannot be empty.");
  } else if (passwordValue !== passwordTwoValue) {
    setError(passwordTwo, "Passwords do not match.");
  } else {
    setSuccess(passwordTwo);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
