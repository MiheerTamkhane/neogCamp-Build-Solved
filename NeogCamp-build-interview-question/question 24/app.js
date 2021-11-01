const input = document.querySelector("#input");
const button = document.querySelector("#button");
const counter = document.querySelector("#counter");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  counter.innerText = 30 - input.value.length;
  if (counter.innerText <= 15) {
    counter.style.color = "blue";
    if (counter.innerText < 0) {
      counter.style.color = "red";
      button.disabled = true;
    }
  } else {
    counter.style.color = "black";
    button.disabled = false;
  }
});

button.addEventListener("click", () => {
  output.innerText = input.value;
});
