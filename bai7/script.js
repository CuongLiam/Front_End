function findMissingNumber(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    let n = arr.length + 1;
    let sumExpected = (arr[0] + arr[arr.length - 1]) * n / 2;
    let sumActual = arr.reduce((acc, num) => acc + num, 0);

    return sumExpected - sumActual;
}
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([10, 11, 12, 14]));
console.log(findMissingNumber([100, 101, 103, 104]));
console.log(findMissingNumber("abc"));
// console.log(findMissingNumber([1]));
