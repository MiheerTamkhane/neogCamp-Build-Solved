const input = document.querySelector("#userInput");
const button = document.querySelector("#result");
const output = document.querySelector("#output");
let random = Math.floor(Math.random() * 10);
button.addEventListener("click", () => {
  console.log(random);
  if (input.value == random) {
    output.innerText = "You are correct!";
  } else {
    output.innerText = "Nahh! Try guessing.";
  }
});
