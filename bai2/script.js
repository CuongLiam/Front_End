const text = document.getElementById("text");
const btn = document.getElementById("btn");

const body = document.body;

btn.addEventListener("click", () =>{
    body.classList.toggle("dark-mode")
})

// btn.addEventListener("click", () => {
//   const isDark = body.classList.contains("dark-mode");

//   if (isDark) {
//     body.classList.remove("dark-mode");
//     body.classList.add("light-mode");
//     btn.textContent = "Switch to Dark Mode";
//   } else {
//     body.classList.remove("light-mode");
//     body.classList.add("dark-mode");
//     btn.textContent = "Switch to Light Mode";
//   }
// });
