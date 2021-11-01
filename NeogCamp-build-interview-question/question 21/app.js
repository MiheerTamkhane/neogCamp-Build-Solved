const array = [
  "sarang",
  "miheer",
  "jayesh",
  "pankaj",
  "ranjit",
  "suraj",
  "atul",
  "yash",
  "rohit",
  "chandan",
];

const button = document.querySelector("#random");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  console.log(array);
  console.log(Math.floor(Math.random() * array.length + 1));
  output.innerText = array[Math.floor(Math.random() * array.length)];
});
