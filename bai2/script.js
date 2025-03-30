function sum(a, b) {
    return a+b;
}
function isNum(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || isNaN(a) || isNaN(b)) {
        console.log(`dữ liệu ko hợp lệ`);
        return;
    }
}

let a = Number(prompt(`nhap a:`));
let b = Number(prompt(`nhap b:`));

isNum(a, b);
console.log(sum(a, b));
