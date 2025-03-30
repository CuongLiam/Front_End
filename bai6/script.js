let inputString = "";

while (true) {
    let choice = Number(prompt(`=============== MENU ===============
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình
===================================
Nhập lựa chọn:`));

    switch (choice) {
        case 1:
            inputString = prompt("Nhập chuỗi:");
            alert("Chuỗi đã được nhập.");
            break;

        case 2:
            if (inputString === "") {
                alert("Chuỗi trống");
            } else {
                alert(`Chuỗi hiện tại: ${inputString}`);
            }
            break;

        case 3:
            alert(`Độ dài của chuỗi: ${inputString.length}`);
            break;

        case 4:
            let charToCount = prompt("Nhập ký tự cần đếm:");
            let count = inputString.split(charToCount).length - 1;
            alert(`Số lần xuất hiện của '${charToCount}': ${count}`);
            break;

        case 5:
            let reversedString = inputString.split('').reverse().join('');
            if (inputString === reversedString) {
                alert("Chuỗi là chuỗi đối xứng.");
            } else {
                alert("Chuỗi không phải là chuỗi đối xứng.");
            }

        case 6:
            // let formattedString = inputString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            // alert(`Chuỗi sau khi chuyển đổi: ${formattedString}`);

            let result = "";
            let capitalizeNext = true;
            for (let i = 0; str[i] !== undefined; i++) {
                if (capitalizeNext && str[i] >= 'a' && str[i] <= 'z') {
                    result += String.fromCharCode(str[i].charCodeAt(0) - 32);
                } else {
                    result += str[i];
                }
                capitalizeNext = (str[i] === ' ');
            }
            alert(`Chuỗi sau khi chuyển đổi: ${result}`);
            break;

        case 7:
            alert("bye");
            break;

        default:
            alert("Vui lòng nhập số từ 1 -> 7");
            break;
    }

    if (choice === 7) break;
}
