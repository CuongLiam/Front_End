function filterLongStrings(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'string')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let result = arr.filter(str => str.length > 5);

    if (result.length > 0) {
        console.log(result);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}

filterLongStrings(["apple", "banana", "cat", "elephant", "dog"]);
filterLongStrings([]);                                         
filterLongStrings("abc");                            
filterLongStrings(["hello", "world", "hi", "JavaScript"]);  
filterLongStrings(["sun", "moon", "earth", "universe", "space"]);
