let soTienGui = Number(prompt("Nhập số tiền gửi (VNĐ):"));
let soThangGui = Number(prompt("Nhập số tháng gửi:"));

// tinh lai suat thang cho nhanh
let laiSuatThang = 4.3 / 12 / 100; //Lãi suất theo tháng được tính từ lãi suất năm (4.3% → 4.3 / 12 / 100)
let tienLai = soTienGui * laiSuatThang * soThangGui; // Lãi suất theo tháng (4.3%/năm), Tiền lãi = soTienGui * 4,3% * soThang 
let tongSoTien = soTienGui + tienLai;

console.log(`Số tiền lãi sau ${soThangGui} tháng là: ${tienLai.toLocaleString("vi-VN")} VNĐ`);
console.log(`Tổng số tiền nhận được: ${tongSoTien.toLocaleString("vi-VN")} VNĐ`);