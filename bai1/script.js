let num = prompt(`Nhap 1 so nguyen`);

let sum = 0;

if (num <= 0 || isNaN(num) === true) {
  console.log(`Du lieu nhap vao khong hop le`);
} else {
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
}
console.log(sum);
