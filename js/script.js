const newsletterContainer = document.querySelector(".newsletter");
const successMessage = document.querySelector(".success");
const emailInput = document.querySelector("#email-value");
const spanEl = document.querySelector("#email-address");

newsletterContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  newsletterContainer.classList.add("hide");
  successMessage.classList.remove("hide");
  spanEl.textContent = emailInput.value;
});

successMessage.addEventListener("submit", (e) => {
  e.preventDefault();
  successMessage.classList.add("hide");
  newsletterContainer.classList.remove("hide");
});

/* newsletterContainer.removeEventListener("submit");
successMessage.removeEventListener("submit"); */

console.log("Hello world");
