function filterNumbers(arr) {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    
    let result = arr.filter(num => num >= 10);
    // function check(num){
    //     // if(num >=10) return num;
    //     return num>=10;
    // }
    console.log(result.length > 0 ? result : "Mảng không có phần tử nào");
}

filterNumbers([1, 22, 10, 9, 8]);
filterNumbers([]);
filterNumbers("abc");
