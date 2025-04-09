const images = document.querySelectorAll(".container img"); //Node list of imgs

const overlay = document.getElementById("overlay");
const zoomedImg = document.getElementById("zoomedImg");

images.forEach((img) => {
  img.addEventListener("click", () => {
    zoomedImg.src = img.src;
    overlay.style.display = "flex";
  });
});

overlay.addEventListener("click", (event) => {
  if (event.target !== zoomedImg) { 
    overlay.style.display = "none";
    zoomedImg.src = "";
  }
});
