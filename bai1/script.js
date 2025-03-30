let arr = [];

while (true) {
    alert(`---------------Menu----------------
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử
6. Sắp xếp mảng tăng dần
7. Thoát
------------------------------------`);
    
    let choice = Number(prompt("Nhập lựa chọn:"));

    switch (choice) {
        case 1:
            arr = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:").split(",").map(Number);
            alert("Mảng đã được nhập!");
            break;

        case 2:
            if (arr.length === 0) {
                alert("Mảng rỗng");
            } else {
                alert("Mảng hiện tại: " + arr.join(", "));
            }
            break;

        case 3:
            if (arr.length === 0) {
                alert("Mảng rỗng");
            } else {
                let max = arr[0], min = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) max = arr[i];
                    if (arr[i] < min) min = arr[i];
                }
                alert(`Phần tử lớn nhất: ${max}\nPhần tử nhỏ nhất: ${min}`);
            }
            break;

        case 4:
            if (arr.length === 0) {
                alert("rõng");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                alert("Tổng các phần tử: " + sum);
            }
            break;

        case 5:
            if (arr.length === 0) {
                alert("Mảng rỗng");
            } else {
                let num = Number(prompt("Nhập số cần tìm:"));
                let count = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === num) count++;
                }
                alert(`Số ${num} xuất hiện ${count} lần trong mảng.`);
            }
            break;

        case 6:
            if (arr.length === 0) {
                alert("Mảng rỗng");
            } else {
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - i - 1; j++) {
                        if (arr[j] > arr[j + 1]) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
                alert("Mảng sau khi sắp xếp tăng dần: " + arr.join(", "));
            }
            break;

        case 7:
            alert("bye");
            break;

        default:
            alert("Vui lòng nhập số từ 1 -> 7");
            break;
    }

    if (choice === 7) {
        break;
    }
}
