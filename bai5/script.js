let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));

if (isNaN(a) || isNaN(b) || !Number.isInteger(b)) {
  alert("Không hợp lệ! Vui lòng nhập số hợp lệ.");
} else if (b < 0) {
  alert("Không hợp lệ! Không hỗ trợ số mũ âm.");
} else {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  alert(`Kết quả: ${a}^${b} = ${result}`);
}
