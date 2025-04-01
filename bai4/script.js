function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i*i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimeNumbers(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let primeNumbers = arr.filter(num => isPrime(num));

    if (primeNumbers.length > 0) {
        console.log(primeNumbers);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}

filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
filterPrimeNumbers([]);
filterPrimeNumbers("abc");
