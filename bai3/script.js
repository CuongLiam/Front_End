let num = prompt("Nhập vào một số nguyên:");

// if(num <= 0 || isNaN(num) === true){
//     console.log(`du lieu nhap vao khong hop le`);
// console.log(num.length);

if (!/^\d+$/.test(num)) {
    console.log("Số không hợp lệ");
} else {
    let isSymmetric = true;
    let length = num.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (num[i] !== num[length - 1 - i]) {
            isSymmetric = false;
            break;
        }
    }

    if (isSymmetric) {
        console.log(`${num} là số đối xứng`);
    } else {
        console.log(`${num} không phải số đối xứng`);
    }
}
