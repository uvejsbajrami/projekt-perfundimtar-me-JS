const logregBox = document.querySelector(".logreg-box");

const loginLink = document.querySelector(".login-link");

const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});

// loginLink.addEventListener("click", () => {
//   logregBox.classList.remove("active");
// });

// icona per me bo passin te dukshme

const passi = document.querySelector("#password");
const icona = document.getElementById("eye-icon");

icona.addEventListener("click", () => {
  if (passi.type === "password") {
    passi.type = "text";
  } else {
    passi.type = "password";
  }
});
const passi2 = document.querySelector("#password2");

const registerIcona = document.getElementById("eye-icon2");
registerIcona.addEventListener("click", () => {
  if (passi2.type === "password") {
    passi2.type = "text";
  } else {
    passi2.type = "password";
  }
});
