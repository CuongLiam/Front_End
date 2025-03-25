while (true) {
  let a = Number(prompt(`Nhap a`));
  let b = Number(prompt(`Nhap b`));
  let c = Number(prompt(`Nhap c`));

  if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert(`khong hop le`);
    continue;
  } else {
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
      alert(`pt vo nghiem`);
    } else if (delta === 0) {
      alert(`pt co 2 nghiem kep la: x1 = x2 = ${-b / (2 * a)}`);
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      alert(`pt co 2 nghiem pb la x1 = ${x1}, x2 = ${x2}`);
    }
    break;
  }
}
