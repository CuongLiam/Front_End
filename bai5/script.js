let matrix = [];

while (true) {
    let choice = Number(prompt(`=============== MENU ===============
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột
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
            let mainDiagonalSum = 0;
            for (let i = 0; i < Math.min(matrix.length, matrix[0].length); i++) {
                mainDiagonalSum += matrix[i][i];
            }
            alert(`Tổng đường chéo chính: ${mainDiagonalSum}`);
            break;

        case 5:
            let secondaryDiagonalSum = 0;
            for (let i = 0; i < Math.min(matrix.length, matrix[0].length); i++) {
                secondaryDiagonalSum += matrix[i][matrix[0].length - 1 - i];
            }
            alert(`Tổng đường chéo phụ: ${secondaryDiagonalSum}`);
            break;

        case 6:
            let option = prompt("Bạn muốn tính trung bình cộng của hàng (H) hay cột (C)?").toUpperCase();
            if (option === "H") {
                let rowNum = Number(prompt(`Nhập số thứ tự hàng (1 - ${matrix.length}):`)) - 1;
                if (rowNum < 0 || rowNum >= matrix.length) {
                    alert("Hàng không hợp lệ.");
                    break;
                }
                let rowSum = 0;
                for (let j = 0; j < matrix[rowNum].length; j++) {
                    rowSum += matrix[rowNum][j];
                }
                let rowAvg = rowSum / matrix[rowNum].length;
                alert(`Trung bình cộng hàng ${rowNum + 1}: ${rowAvg.toFixed(2)}`);
            } else if (option === "C") {
                let colNum = Number(prompt(`Nhập số thứ tự cột (1 - ${matrix[0].length}):`)) - 1;
                if (colNum < 0 || colNum >= matrix[0].length) {
                    alert("Cột không hợp lệ.");
                    break;
                }
                let colSum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    colSum += matrix[i][colNum];
                }
                let colAvg = colSum / matrix.length;
                alert(`Trung bình cộng cột ${colNum + 1}: ${colAvg.toFixed(2)}`);
            } else {
                alert("Lựa chọn không hợp lệ.");
            }
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