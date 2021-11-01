const input = document.querySelector("#input");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

button.addEventListener("click", clickHandler);
function clickHandler() {
  let text = input.value;
  let newText = text.split("");
  console.log(newText);
}
