// import {showErrors} from "./showErrors.js";

const name = document.getElementById("name");
const password = document.getElementById("password");
const passwordRepeated = document.getElementById("passwordRepeated");

const form = document.getElementById("form");
const errors = document.getElementById("errors");

form.addEventListener("submit", (event) => {
  // event.preventDefault();
  let errorMessages = [];

  if (password.value.length < 16) {
    errorMessages.push("The passphrase must be at least 16 characters.");
  }

  if (password.value != passwordRepeated.value) {
    errorMessages.push("The passwords did not match.");
  }

  if (errorMessages.length > 0) {
    event.preventDefault();
    // showErrors(errors, errorMessages);
    errors.innerText = errorMessages.join(", ");
  }
});
