let arr = [];

while (true) {
    alert(`---------------Menu----------------
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
------------------------------------`);
    
    let choice = Number(prompt("Nhập lựa chọn:"));

    switch (choice) {
        case 1:
            arr = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:").split(",").map(Number);
            alert("Mảng đã được nhập!");
            break;

        case 2:
            if (arr.length === 0) {
                alert("Mảng trống");
            } else {
                alert("Mảng hiện tại: " + arr.join(", "));
            }
            break;

        case 3:
            if (arr.length === 0) {
                alert("Mảng trống");
            } else {
                let max = arr[0];
                let indexMax = 0;
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        indexMax = i;
                    }
                }
                alert(`Phần tử lớn nhất: ${max}, tại chỉ số: ${indexMax}`);
            }
            break;

        case 4:
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                let sum = 0, count = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > 0) {
                        sum += arr[i];
                        count++;
                    }
                }
                if (count === 0) {
                    alert("Không có số dương trong mảng");
                } else {
                    let average = sum / count;
                    alert(`Tổng các số dương: ${sum}, Trung bình cộng: ${average.toFixed(2)}`);
                }
            }
            break;

        case 5:
            if (arr.length === 0) {
                alert("Mảng trống");
            } else {
                let reversedArr = [];
                for (let i = arr.length - 1; i >= 0; i--) {
                    reversedArr.push(arr[i]);
                }
                arr = reversedArr;
                alert("Mảng sau khi đảo ngược: " + arr.join(", "));
            }
            break;

        case 6:
            if (arr.length === 0) {
                alert("Mảng trống");
            } else {
                let isSymmetric = true;
                for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                    if (arr[i] !== arr[arr.length - 1 - i]) {
                        isSymmetric = false;
                        break;
                    }
                }
                if (isSymmetric) {
                    alert("Mảng đối xứng");
                } else {
                    alert("Mảng không đối xứng!");
                }
            }
            break;

        case 7:
            alert("Chương trình kết thúc");
            break;

        default:
            alert("Vui lòng nhập số từ 1 -> 7");
            break;
    }

    if (choice === 7) {
        break;
    }
}
