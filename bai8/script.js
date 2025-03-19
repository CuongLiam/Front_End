let a = Number(prompt("Nhập cạnh a:"));
let b = Number(prompt("Nhập cạnh b:"));
let c = Number(prompt("Nhập cạnh c:"));

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    console.log("Đây là tam giác đều");
  } else if (a === b || a === c || b === c) {
    console.log("Đây là tam giác cân");
  } else if (
    a ** 2 + b ** 2 === c ** 2
    ||
    a ** 2 + c ** 2 === b ** 2
    ||
    b ** 2 + c ** 2 === a ** 2
  ) {
    console.log("Đây là tam giác vuông");
  } else {
    console.log("Đây là tam giác thường");
  }
} else {
  console.log("Ba cạnh không tạo thành tam giác");
}
