const rootStyles = getComputedStyle(document.documentElement);
const lightRed = rootStyles.getPropertyValue("--light-red").trim();
const paleBlue = rootStyles.getPropertyValue("--pale-blue");

document.getElementById("notify-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const errorMessageOne = document.getElementById("error-message1");
  const errorMessageTwo = document.getElementById("error-message2");
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailValue)) {
    errorMessageOne.textContent = "";
    errorMessageTwo.textContent = "";
    alert("You have been subscribed");
    emailInput.value = "";
    emailInput.style.border = "1px solid" + " " + paleBlue;
  } else {
    if (window.matchMedia("(min-width: 700px)").matches) {
      errorMessageTwo.textContent = "Please provide a valid email address";
      emailInput.style.border = "1px solid" + " " + lightRed;
    } else {
      errorMessageOne.textContent = "Please provide a valid email address";
      errorMessageOne.style.marginBottom = "1.5rem";
      emailInput.style.border = "1px solid" + " " + lightRed;
    }
  }
});

function displayErrorMessages(x) {
  const errorMessageOne = document.getElementById("error-message1");
  const errorMessageTwo = document.getElementById("error-message2");

  if (x.matches) {
    errorMessageOne.style.display = "none";
    errorMessageTwo.style.display = "block";
  } else {
    errorMessageOne.style.display = "block";
    errorMessageTwo.style.display = "none";
  }
}

let x = window.matchMedia("(min-width: 700px)");

displayErrorMessages(x);

x.addEventListener("change", displayErrorMessages);
