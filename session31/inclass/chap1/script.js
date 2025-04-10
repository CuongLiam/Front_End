// // by id
// let div = document.getElementById("demo-id");
// console.log(div);
// //by class
// let elements = document.getElementsByClassName("demo-class"); //[] (kinda)

// console.log(elements); // HTML collection, kinda like array, but not array

// console.log(elements[0]);

// //by tag name
// console.log(document.getElementsByTagName("div")); //same thing as above, but with tag name

//by query selector

let test = document.querySelector("h1#demo-id.demo-class");

console.log(test);

//querry selector all
let testAll = document.querySelectorAll(".demo-class");
console.log(testAll);// node list, kinda like array aswell


// ========================

let p = document.getElementById("para");

console.log(para.innerHTML); //get everything inside the chosen tag, html tags
console.log(para.innerText); //get the text, just text
console.log(para.textContent); //get the text, including spaces, enters

p.textContent = "Hello World!";
