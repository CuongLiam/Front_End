let text = document.getElementById("txt");
let num = document.getElementById("num");
let btn = document.getElementById("btn");

// text.addEventListener("input", function () {
//   console.log(text.value.split("").filter((char) => char !== " "));

//   num.innerText = text.value
//     .trim()
//     .split("")
//     .filter((char) => char !== " ")
//     .reduce((sum) => (sum += 1), 0);
// });
btn.addEventListener("click", function () {
  console.log(text.value.split("").filter((char) => char !== " "));

  num.innerText = text.value
    .trim()
    .split("")
    .filter((char) => char !== " ")
    .reduce((sum) => (sum += 1), 0);
});
