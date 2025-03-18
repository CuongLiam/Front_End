let date1 = new Date(prompt("Nhap date1 (YYYY-MM-DD)"));
let date2 = new Date(prompt("Nhap date2 (YYYY-MM-DD)"));

console.log(date1);
console.log(date2);


let deviation = Math.abs(Number(date1.getDate()) - Number(date2.getDate()));

alert(`chenh lech ${deviation} ngay`);
console.log(`chenh lech ${deviation} ngay`);


// const d = new Date();
// console.log(d);


