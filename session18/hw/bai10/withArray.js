const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

let number = Number(prompt("Nhập số từ 0 - 999:"));

if (number < 0 || number > 999) {
    alert("Số không hợp lệ!");
} else {
    let hundred = Math.floor(number / 100);
    let ten = Math.floor((number % 100) / 10);
    let unit = number % 10;
    let result = "";

    if (hundred > 0) {
        result += ones[hundred] + " trăm";
        if (ten === 0 && unit !== 0) result += " linh";
    }

    if (ten > 1) {
        result += " " + ones[ten] + " mươi";
        if (unit === 1) result += " mốt"; 
        else if (unit === 5) result += " lăm";
        else if (unit > 0) result += " " + ones[unit];
    } else if (ten === 1) {
        result += " mười";
        if (unit > 0) result += " " + ones[unit];
    } else if (unit > 0) {
        result += " " + ones[unit];
    }

    alert(result.trim());
}
