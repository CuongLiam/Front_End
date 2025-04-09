const text = document.getElementById("text");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let fontSize = 24;

increaseBtn.addEventListener("click", () => {
  fontSize += 4;
  text.style.fontSize = fontSize + "px";
});

decreaseBtn.addEventListener("click", () => {
  if (fontSize > 10) {
    fontSize -= 4;
    text.style.fontSize = fontSize + "px";
  }
});
