function findMaxAndPosition(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng ko có dữ liệu");
        return;
    }

    let max = Math.max(...arr); // spread operator
    //...arr = arr[i], arr[i+1], ...
    let position = arr.indexOf(max);

    console.log(`max = ${max}`);
    console.log(`position: ${position}`);
}

findMaxAndPosition([10, 9, 5, 11, 24, 5]);
findMaxAndPosition([]);
findMaxAndPosition("abc");
