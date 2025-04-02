function splitArray(arr, n) {
    if (!Array.isArray(arr) || typeof n !== 'number' || n <= 0) {
        return "dữ liệu không hợp lệ";
    }

    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        // let subArray = [];
        // for (let j = i; j < i + n && j < arr.length; j++) {
        //     subArray.push(arr[j]);
        // }
        // result.push(subArray);

        result.push(arr.slice(i, i + n));
    }
    
    return result;
}
console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(splitArray("abc", 3));
