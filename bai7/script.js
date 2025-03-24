let n = Number(prompt(`nhap n`));

// fk-2, fk-1, fk
// prev1, prev2, curr

if (n <= 0 || isNaN(n) == true) {
  console.log(`khong hop le`);
} else {
  let prev1 = 1, //can change to 0 cuz its more likely fibo
    prev2 = 1,
    curr;
    // console.log(prev2);
  for (let i = 0; i < n; i++) {
    console.log(prev1);
    curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }
}

// if (n < 0 || isNaN(n)) {
//   console.log(`Không hợp lệ`);
// } else if (n == 0 || n == 1) {
//   console.log(`Số Fibonacci thứ ${n} là 1`);
// } else {
//   let fk_2 = 1,
//     fk_1 = 1,
//     fk = 1;

//   for (let j = 2; j < n; j++) {
//     fk = fk_1 + fk_2;
//     fk_2 = fk_1;
//     fk_1 = fk;
//   }

//   console.log(`Số Fibonacci thứ ${n} là ${fk}`);
// }
