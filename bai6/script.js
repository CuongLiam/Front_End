function isCsc(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }

    let diff = arr[1] - arr[0]; //hieu so chung

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false;
        }
    }

    return true;
}

console.log(isCsc([2, 4, 6, 8]));
console.log(isCsc([1, 2, 4, 8]));
// console.log(isCsc([5])); 
console.log(isCsc("abc"));
