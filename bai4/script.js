let matrix = [];

while (true) {
    let choice = Number(prompt(`=============== MENU ===============
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
===================================
Nhập lựa chọn:`));

    switch (choice) {
        case 1:
            let rows = Number(prompt("Nhập số hàng của mảng:"));
            let cols = Number(prompt("Nhập số cột của mảng:"));
            matrix = new Array(rows);
            for (let i = 0; i < rows; i++) {
                matrix[i] = new Array(cols);
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = Number(prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`));
                }
            }
            alert("Mảng 2 chiều đã được nhập.");
            break;

        case 2:
            if (matrix.length === 0) {
                alert("Mảng trống. Hãy nhập mảng trước.");
            } else {
                let display = "MẢNG 2 CHIỀU:\n";
                for (let i = 0; i < matrix.length; i++) {
                    display += "| " + matrix[i].join(" | ") + " |\n";
                }
                alert(display);
            }
            break;

        case 3:
            let sum = 0;
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    sum += matrix[i][j];
                }
            }
            alert(`Tổng các phần tử trong mảng: ${sum}`);
            break;

        case 4:
            let max = matrix[0][0], rowIndex = 0, colIndex = 0;
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] > max) {
                        max = matrix[i][j];
                        rowIndex = i;
                        colIndex = j;
                    }
                }
            }
            alert(`Phần tử lớn nhất: ${max} (vị trí: hàng ${rowIndex + 1}, cột ${colIndex + 1})`);
            break;

        case 5:
            let rowNum = Number(prompt(`Nhập số thứ tự hàng (1 - ${matrix.length}):`)) - 1;
            if (rowNum < 0 || rowNum >= matrix.length) {
                alert("Hàng không hợp lệ.");
                break;
            }
            let rowSum = 0;
            for (let j = 0; j < matrix[rowNum].length; j++) {
                rowSum += matrix[rowNum][j];
            }
            let avg = rowSum / matrix[rowNum].length;
            alert(`Trung bình cộng hàng ${rowNum + 1}: ${avg.toFixed(2)}`);
            break;

        case 6:
            for (let i = 0; i < matrix.length; i++) {
                matrix[i].reverse();
            }
            let reversedDisplay = "MẢNG SAU KHI ĐẢO NGƯỢC:\n";
            for (let i = 0; i < matrix.length; i++) {
                reversedDisplay += "| " + matrix[i].join(" | ") + " |\n";
            }
            alert(reversedDisplay);
            break;

        case 7:
            alert("Chương trình kết thúc.");
            break;

        default:
            alert("Vui lòng nhập số từ 1 đến 7.");
            break;
    }

    if (choice === 7) break;
}
