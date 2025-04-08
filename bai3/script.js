const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (box.classList.contains("green")) {
      document.body.style.backgroundColor = "green";
    } else if (box.classList.contains("red")) {
      document.body.style.backgroundColor = "red";
    } else if (box.classList.contains("purple")) {
      document.body.style.backgroundColor = "violet";
    }
  });
});
