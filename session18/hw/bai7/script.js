let a = Number(prompt("Nhập số thứ nhất (a):"));
let b = Number(prompt("Nhập số thứ hai (b):"));

let operator = prompt("Nhập phép toán (+, -, *, /):");

let result;

switch (operator) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = b !== 0 ? a / b : "error: Không thể chia cho 0";
        break;
    default:
        result = "Phép toán không có trong thư viện của chúng tôi";
}

alert(`Kết quả của phép tính: ${a} ${operator} ${b} = ${result}`);
console.log(`Kết quả của phép tính: ${a} ${operator} ${b} = ${result}`);
