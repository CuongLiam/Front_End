let arr = [];

while (true) {
    alert(`---------------Menu----------------
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
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
                let evenNumbers = [];
                let oddNumbers = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        evenNumbers.push(arr[i]);
                    } else {
                        oddNumbers.push(arr[i]);
                    }
                }
                alert(`Số chẵn: ${evenNumbers.join(", ")}\nSố lẻ: ${oddNumbers.join(", ")}`);
            }
            break;

        case 4:
            if (arr.length === 0) {
                alert("Mảng trống");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                let average = sum / arr.length;
                alert("Trung bình cộng của mảng: " + average.toFixed(2));
            }
            break;

        case 5:
            if (arr.length === 0) {
                alert("Mảng trống");
            } else {
                let index = Number(prompt("Nhập vị trí muốn xóa (từ 1 đến " + arr.length + "):"));
                if (index < 1 || index > arr.length) {
                    alert("Vị trí không hợp lệ");
                } else {
                    arr.splice(index - 1, 1);
                    alert("Mảng sau khi xóa: " + arr.join(", "));
                }
            }
            break;

        case 6:
            if (arr.length < 2) {
                alert("Mảng phải có ít nhất 2 phần tử");
            } else {
                let max = -Infinity, secondMax = -Infinity;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > max) {
                        secondMax = max;
                        max = arr[i];
                    } else if (arr[i] > secondMax && arr[i] < max) {
                        secondMax = arr[i];
                    }
                }
                if (secondMax === -Infinity) {
                    alert("Không có phần tử lớn thứ hai!");
                } else {
                    alert("Phần tử lớn thứ hai trong mảng là: " + secondMax);
                }
            }
            break;

        case 7:
            alert("goodbye");
            break;

        default:
            alert("Vui lòng nhập số từ 1 -> 7");
            break;
    }

    if (choice === 7) {
        break;
    }
}
