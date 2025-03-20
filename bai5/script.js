let string = String(prompt(`Nhap 1 chuoi`));

if (string.includes(" ", 0)) {
  console.log(`chuỗi chứa dấu cách`);
} else {
  console.log(`chuỗi không chứa dấu cách`);
}
