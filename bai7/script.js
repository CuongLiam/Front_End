function main(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }
    let squaredNumbers = arr.map(num => num * num);

    let evenSquaredNumbers = squaredNumbers.filter(num => num % 2 === 0);

    console.log(evenSquaredNumbers);
}
main([2, 5, 10]);
main([]);
main("abc");
