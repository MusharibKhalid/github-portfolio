const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", () => {
  status.innerText = "Message sent successfully ✔";
  setTimeout(() => {
    status.innerText = "";
  }, 4000);
});
