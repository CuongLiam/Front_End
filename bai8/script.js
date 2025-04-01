function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i*i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterOddPrimes(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }

    let oddPrimes = arr.filter(num => isPrime(num) && num % 2 !== 0);

    console.log(oddPrimes);
}
filterOddPrimes([10, 2, 3, 5, 7, 9]);
filterOddPrimes([]);
filterOddPrimes("abc");