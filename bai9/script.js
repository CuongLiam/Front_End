function sumEvenOdd(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }

    let totalEven = arr.filter(num => num % 2 === 0)
                       .reduce((sum, num) => sum + num, 0);
                        //if
                        //const numbers = [1, 2, 3, 4, 5];
                        // const total = numbers.reduce((sum, num) => sum + num, 0);
                        // console.log(total); // Output: 15


    let totalOdd = arr.filter(num => num % 2 !== 0)
                      .reduce((sum, num) => sum + num, 0);

    console.log(`totalEven = ${totalEven}`);
    console.log(`totalOdd = ${totalOdd}`);
}
sumEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);  
sumEvenOdd([]);                    
sumEvenOdd("abc");                
