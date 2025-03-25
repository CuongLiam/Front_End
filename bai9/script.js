while (true) {
  let n = +prompt(`nhap 1 so nguyen bat ki`);

  if (n <= 1 || isNaN(n) || !Number.isInteger(n)) {
    alert(`"${n}" khong phai so hop le de kiem tra vui long nhap lai (>=2)`);
    continue;
  } else {
    let flag = true;
    if (n == 2) {
      flag = true;
    } else {
      for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
          flag = false;
          break;
        }
      }
    }

    if (flag) {
      alert(`${n} la so nguyen to`);
    } else {
      alert(`"${n}" khong phai so nguyen to`);
    }
  }
  let tiepTuc = prompt("Bạn có muốn kiểm tra số khác? (Y/N)").toLowerCase();
  if (tiepTuc !== "y") {
    break;
  }
}
