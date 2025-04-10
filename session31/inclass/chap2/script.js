// DOM - Document Object Model

// truy vấn html 
// by id, class, tag name, css slector

let h1 = document.getElementById("title");
console.log(h1);

let li = document.getElementsByClassName("list-item");
console.log(li);

let tag = document.getElementsByTagName("li");
console.log(tag);


let one = document.querySelector(".list > .item-1 ");
console.log(one);

let all = document.querySelectorAll(".list > .item-1 ");
console.log(all);

// láy nội dung của thẻ : inner html, inner text, text content
console.log("Noi dung the h1: "+h1.innerHTML);
h1.id = "headings";

console.log(h1.classList);
h1.classList.add("title","heading");
h1.classList.remove("title");

//=================

// let img = document.getElementById("image");
// img.getAttribute("src", "http://abc.jpg"); 
// console.log("src = ", img.getAttribute("src"));
