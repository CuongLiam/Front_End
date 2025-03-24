let n = Number(prompt(`nhap n`));

if (n <= 1 || isNaN(n) == true) {
  console.log(`khong hop le`);
} else {
  let count = 0;
  let check = 2;

  while (count < n) {
    let flag = true;
    for (let i = 2; i * i <= check; i++) {
      if (check % i === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log(check);
      count++;
    }
    check++;
  }
}
