let n = Number(prompt(`nhap so phan tu muon them`));

if (n <= 0 || isNaN(n)) {
  console.log(`khong hop le`);
} else {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`array[${i}] = `));
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(count);
}
