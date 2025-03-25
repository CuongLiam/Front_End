let n = +prompt(`nhap so nguyen bat ki`);

// n so nguyen to dau tien, if u wanna change it to so nguyen to < n just change the whole condi
if (n < 2 || isNaN(n) || !Number.isInteger(n)) {
  alert(`du lieu nhap vao khong hop le`);
} else {
  let check = 2;
  let count = 0;

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

