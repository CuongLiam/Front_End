let n = Number(prompt("Nhập số tiền cần rút (phải chia hết cho 1000):"));

if (n % 1000 !== 0) {
    console.log("khong hop le");
} else {
    // console.log(`Số tiền cần rút: ${n.toLocaleString()} VND`);

    if (n >= 500000) {
        let count = Math.floor(n / 500000);
        console.log(`500.000 - ${count} tờ`);
        n -= count * 500000;
    }
    if (n >= 200000) {
        let count = Math.floor(n / 200000);
        console.log(`200.000 - ${count} tờ`);
        n -= count * 200000;
    }
    if (n >= 100000) {
        let count = Math.floor(n / 100000);
        console.log(`100.000 - ${count} tờ`);
        n -= count * 100000;
    }
    if (n >= 50000) {
        let count = Math.floor(n / 50000);
        console.log(`50.000 - ${count} tờ`);
        n -= count * 50000;
    }
    if (n >= 20000) {
        let count = Math.floor(n / 20000);
        console.log(`20.000 - ${count} tờ`);
        n -= count * 20000;
    }
    if (n >= 10000) {
        let count = Math.floor(n / 10000);
        console.log(`10.000 - ${count} tờ`);
        n -= count * 10000;
    }
    if (n >= 5000) {
        let count = Math.floor(n / 5000);
        console.log(`5.000 - ${count} tờ`);
        n -= count * 5000;
    }
    if (n >= 2000) {
        let count = Math.floor(n / 2000);
        console.log(`2.000 - ${count} tờ`);
        n -= count * 2000;
    }
    if (n >= 1000) {
        let count = Math.floor(n / 1000);
        console.log(`1.000 - ${count} tờ`);
        n -= count * 1000;
    }
}
