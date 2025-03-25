// A=P×(1+r)^n
// Trong đó:
// A là số tiền sau n tháng.

// P là số tiền gốc ban đầu.

// r là lãi suất (chia cho 100 để chuyển thành số thập phân).

// n là số tháng gửi.

while (true) {
    let P = Number(prompt("Nhập số tiền ban đầu:"));
    let r = Number(prompt("Lãi suất tháng (%):"));
    let n = Number(prompt("Số tháng gửi:"));
  
    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r < 0 || n <= 0) {
      alert("Dữ liệu không hợp lệ! Vui lòng nhập lại");
      continue;
    } else {
      let A = P * Math.pow(1 + r / 100, n);
      let interest = A - P;
  
      alert(`Tiền nhận được: ${A.toFixed(3)}\nTiền lãi: ${interest.toFixed(3)}`);
      console.log(`Tiền nhận được: ${A.toFixed(3)}`);
      console.log(`Tiền lãi: ${interest.toFixed(3)}`);
      break;
    }
  }
  