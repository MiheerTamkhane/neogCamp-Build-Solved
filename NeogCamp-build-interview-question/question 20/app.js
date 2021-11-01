const input = document.querySelector("#input");
const button = document.querySelector("#show-hide");

input.addEventListener("input", () => {
  input.style.borderColor = "red";
  if (input.value.length > 10) {
    input.style.borderColor = "green";
  }
});

button.addEventListener("click", () => {
  if (button.innerText === "Show pass") {
    input.type = "text";
    button.innerText = "Hide pass";
  } else if (button.innerText === "Hide pass") {
    input.type = "password";
    button.innerText = "Show pass";
  }
});
