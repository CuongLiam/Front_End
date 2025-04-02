function largestNumber(n) {
    if (typeof n !== "number" || n < 0) {
        return "Dữ liệu không hợp lệ";
    }

    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}
console.log(largestNumber(12395));
console.log(largestNumber("abc"));
