const para = document.querySelector("#para");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
let px = 16;

inc.addEventListener("click", () => {
  px = px + 4;
  para.style.fontSize = px + "px";
  if (px % 5 === 0) {
    para.style.color = "red";
  } else {
    para.style.color = "black";
  }
});

dec.addEventListener("click", () => {
  px = px - 4;
  para.style.fontSize = px + "px";
  if (px % 5 === 0) {
    para.style.color = "red";
  } else {
    para.style.color = "black";
  }
});
