const text = document.getElementById("text");
const hideBtn = document.getElementById("hideBtn");
const showBtn = document.getElementById("showBtn");

hideBtn.addEventListener("click", () => {
  text.style.display = "none";
});

showBtn.addEventListener("click", () => {
  text.style.display = "block";
});
