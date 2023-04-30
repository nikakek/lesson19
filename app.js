const form = document.getElementById("myForm");
const mobileNumberInput = document.getElementById("mobile-number");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeat-password");
const mobileNumberWarning = document.getElementById("mobile-number-warning");
const repeatPasswordWarning = document.getElementById("repeat-password-warning")

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!validateMobileNumber()) {
    mobileNumberInput.classList.add("invalid");
    mobileNumberWarning.innerHTML = "Please enter a valid mobile number.";
    return;
  } else {
    mobileNumberInput.classList.remove("invalid");
    mobileNumberWarning.innerHTML = "";
  }
  if (passwordInput.value !== repeatPasswordInput.value) {
    repeatPasswordInput.classList.add("invalid");
    repeatPasswordWarning.innerHTML = "passwords must be same";
    return;
  }else{
    repeatPasswordInput.classList.remove("invalid");
    repeatPasswordWarning.innerHTML = "";
  }

});

function validateMobileNumber() {
  const mobileNumber = mobileNumberInput.value.trim();
  if (!/^\d{9}$/.test(mobileNumber)) {
    return false;
  }
  return true;

}

function validatePassword() {
    const password = repeatPasswordInput.value.trim();
    if (passwordInput.value !== repeatPasswordInput.value) {
      return false;
    }
    return true;
  }