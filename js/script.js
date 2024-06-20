const rootStyles = getComputedStyle(document.documentElement);
const lightRed = rootStyles.getPropertyValue("--light-red").trim();
const paleBlue = rootStyles.getPropertyValue("--pale-blue").trim();
const blue = rootStyles.getPropertyValue("--blue").trim();
const notificationBtn = document.getElementById("notify-btn");

function errorMessages() {
  const emailInput = document.getElementById("email");
  const errorMessageOne = document.getElementById("error-message1");
  const errorMessageTwo = document.getElementById("error-message2");
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailValue)) {
    errorMessageOne.textContent = "";
    errorMessageOne.style.marginBottom = "0rem";
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
}

notificationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  errorMessages();
});

notificationBtn.addEventListener("touchstart", () => {
  errorMessages();
  notificationBtn.style.backgroundColor = "white";
  notificationBtn.style.outline = "1px solid" + " " + paleBlue;
  notificationBtn.style.color = blue;
  notificationBtn.style.opacity = "1";

  setTimeout(() => {
    notificationBtn.style.transition = ".2s ease";
    notificationBtn.style.backgroundColor = blue;
    notificationBtn.style.color = "white";
    notificationBtn.style.outline = "none";
  }, 1000);
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
