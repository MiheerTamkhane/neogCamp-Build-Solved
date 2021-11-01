let button = document.querySelector("#dark-mode");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  if (button.innerText === "Light") {
    button.innerText = "Dark";
    body.classList.add("light");
  } else if (button.innerText === "Dark") {
    button.innerText = "Light";
    body.classList.add("dark");
    body.classList.remove("light");
  }
});
