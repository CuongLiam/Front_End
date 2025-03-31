function isDx(str) {
    str = str.trim().toLowerCase();
    
    let length = str.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let inputString = prompt("Nhập vào một chuỗi ký tự để kiểm tra:");

if (isDx(inputString)) {
    console.log(`${inputString} là chuỗi đối xứng`);
    alert(`${inputString} là chuỗi đối xứng`);
} else {
    console.log(`${inputString} không phải chuỗi đối xứng`);
    alert(`${inputString} không phải chuỗi đối xứng`);
}
