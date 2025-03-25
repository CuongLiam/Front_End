let sum = 0;

for (let i = 0; i < 5; i++) {
  let n = Number(prompt(`Nhap so thu ${i + 1} (để trống = 0)`));
  if (isNaN(n)) {
    alert(`khong hop le`);
    break;
  }
  if (n % 2 !== 0) {
    sum += n;
  }
}
alert(`Tong so le la ${sum}`);
