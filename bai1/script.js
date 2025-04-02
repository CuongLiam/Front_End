function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    // if (b === 0) {
    //     alert("Không thể chia cho 0");
    //     return null;
    // }
    return a / b;   
}
while (true) {
    let choice = Number(prompt(`---------Menu---------\n1. Cộng hai số\n2. Trừ hai số\n3. Nhân hai số\n4. Chia hai số\n5. Thoát\n----------------------`));
    
    if (choice === 5) {
        alert("Thoát chương trình");
        break;
    }
    
    let num1 = Number(prompt("Nhập số thứ nhất"));
    let num2 = Number(prompt("Nhập số thứ hai"));
    let result;
    
    switch (choice) {
        case 1:
            result = add(num1, num2);
            break;
        case 2:
            result = subtract(num1, num2);
            break;
        case 3:
            result = multiply(num1, num2);
            break;
        case 4:
            result = divide(num1, num2);
            break;
        default:
            alert("Vui lòng nhập số từ 1 đến 5");
            continue;
    }
    
    if (result !== null) {
        alert(`Kết quả: ${result}`);
    }
}
