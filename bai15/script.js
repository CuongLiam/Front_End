let r = Number(prompt("Nhập bán kính hình cầu (r):"));

const PI = Math.PI;

// V = (4/3) * pi * r^3
let theTich = (4 / 3) * PI * Math.pow(r, 3);

//S = 4 * pi * r^2
let dienTichBeMat = 4 * PI * Math.pow(r, 2);

//C = 2 * π * r
let chuViLonNhat = 2 * PI * r;

console.log(`Thể tích hình cầu: ${theTich.toFixed(2)}`);
console.log(`Diện tích bề mặt: ${dienTichBeMat.toFixed(2)}`);
console.log(`Chu vi lớn nhất: ${chuViLonNhat.toFixed(2)}`);
