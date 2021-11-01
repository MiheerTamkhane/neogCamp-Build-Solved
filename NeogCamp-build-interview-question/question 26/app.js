const input = document.querySelector("#input");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const output = document.querySelector("#output");

inc.addEventListener("click", () => {
  if (isNaN(input.value)) {
    output.innerText = "error occured";
  } else {
    input.value++;
    output.innerText = Number(input.value);
  }
});

dec.addEventListener("click", () => {
  if (isNaN(input.value)) {
    output.innerText = "error occured";
  } else {
    input.value--;
    output.innerText = Number(input.value);
  }
});
