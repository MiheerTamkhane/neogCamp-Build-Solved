const username = document.querySelector("#username");
const color = document.querySelector("#colors");
const button = document.querySelector("#show");
const output = document.querySelector("#output");
button.addEventListener("click", () => {
  output.innerText = username.value;
  output.style.color = color.value;
});
