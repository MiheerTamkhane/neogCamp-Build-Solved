const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  output.innerText = input.value;
  if (input.value.length % 3 === 0) {
    output.style.color = "red";
  } else {
    output.style.color = "black";
  }
});
