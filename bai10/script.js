// let n = 789; //0 - 999

let n = Number(prompt(`nhap so (0-999)`))

if (n < 0 && n > 1000) {
  console.log(`khong hop le`);
} else {
  let hundred = Math.floor(n / 100);
  let ten = Math.floor((n % 100) / 10);
  let unit = Math.floor(n % 10);

  let result = "";

  if (hundred === 1) result += "Một trăm";
  else if (hundred === 2) result += "Hai trăm";
  else if (hundred === 3) result += "Ba trăm";
  else if (hundred === 4) result += "Bốn trăm";
  else if (hundred === 5) result += "Năm trăm";
  else if (hundred === 6) result += "Sáu trăm";
  else if (hundred === 7) result += "Bảy trăm";
  else if (hundred === 8) result += "Tám trăm";
  else if (hundred === 9) result += "Chín trăm";

  if (hundred > 0 && ten === 0 && unit !== 0) {
    result += " linh";
  }

  if (ten === 1) {
    result += " mười";
  } else if (ten === 2) {
    result += " hai mươi";
  } else if (ten === 3) {
    result += " ba mươi";
  } else if (ten === 4) {
    result += " bốn mươi";
  } else if (ten === 5) {
    result += " năm mươi";
  } else if (ten === 6) {
    result += " sáu mươi";
  } else if (ten === 7) {
    result += " bảy mươi";
  } else if (ten === 8) {
    result += " tám mươi";
  } else if (ten === 9) {
    result += " chín mươi";
  }

  if (ten > 1) {
    if (unit === 1) result += " mốt";
    else if (unit === 5) result += " lăm";
    else if (unit === 2) result += " hai";
    else if (unit === 3) result += " ba";
    else if (unit === 4) result += " bốn";
    else if (unit === 6) result += " sáu";
    else if (unit === 7) result += " bảy";
    else if (unit === 8) result += " tám";
    else if (unit === 9) result += " chín";
  } else if (ten === 1) {
    if (unit === 1) result += " một";
    else if (unit === 2) result += " hai";
    else if (unit === 3) result += " ba";
    else if (unit === 4) result += " bốn";
    else if (unit === 5) result += " năm";
    else if (unit === 6) result += " sáu";
    else if (unit === 7) result += " bảy";
    else if (unit === 8) result += " tám";
    else if (unit === 9) result += " chín";
  } else if (ten === 0) {
    if (unit === 1) result += " một";
    else if (unit === 2) result += " hai";
    else if (unit === 3) result += " ba";
    else if (unit === 4) result += " bốn";
    else if (unit === 5) result += " năm";
    else if (unit === 6) result += " sáu";
    else if (unit === 7) result += " bảy";
    else if (unit === 8) result += " tám";
    else if (unit === 9) result += " chín";
  }

  alert(result.trim());
}
