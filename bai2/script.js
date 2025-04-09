const btn = document.getElementById("btn");
let count = document.querySelector(".count")

btn.addEventListener("click", () =>{
    count.innerHTML = parseInt(count.innerHTML) + 1;
})

