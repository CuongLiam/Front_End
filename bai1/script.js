const btn = document.getElementById("btn");
const container = document.querySelector(".container");

function getRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", () => {
    container.style.backgroundColor = getRandomColor();
    // document.body.style.backgroundColor = getRandomColor();
})

