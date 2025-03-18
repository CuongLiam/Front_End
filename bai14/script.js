let r = Number(prompt("Nhập bán kính hình trụ (r) (dont mind the don vi):"));
let h = Number(prompt("Nhập chiều cao hình trụ (h):"));

const PI = Math.PI;

// Cday C = 2 * pi * r
let chuViDay = 2 * PI * r;

// Sxq = 2 * pi * r * h
let dienTichXungQuanh = 2 * PI * r * h;

// Stp = Sxq + 2 * Sđáy (Sđáy = pi * r^2)
let dienTichToanPhan = dienTichXungQuanh + 2 * (PI * r ** 2);

// V = pi * r^2 * h
let theTich = PI * r ** 2 * h;

console.log(`Chu vi đáy: ${chuViDay.toFixed(2)}`);
console.log(`Diện tích xung quanh: ${dienTichXungQuanh.toFixed(2)}`);
console.log(`Diện tích toàn phần: ${dienTichToanPhan.toFixed(2)}`);
console.log(`Thể tích hình trụ: ${theTich.toFixed(2)}`);
