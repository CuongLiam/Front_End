let a = Number(prompt(`Nhap a`));
let b = Number(prompt(`Nhap b`));
let c = Number(prompt(`Nhap c`));

let delta = b * b - 4 * a * c;

if (delta < 0) {
  console.log(`pt vô nghiệm`);
} else if (delta === 0) {
  console.log(`pt co nghiệm kép là : x1 = x2 = ${-b / (2 * a)}`);
} else {
  console.log(
    `pt có 2 nghiệm phân biệt là: x1 = ${
      (-b + Math.sqrt(delta)) / (2 * a)
    }, x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`
  );
}
