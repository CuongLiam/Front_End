let n = +prompt("Nhập số lượng phần tử của mảng:");

if (n < 0) {
  console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
  console.log("Mảng không có phần tử nào");
} else {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`array[${i}] = `);
  }

  console.log("arr:", arr);

  let firstMax = -Infinity, secMax = -Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > firstMax) {
      secMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secMax && arr[i] !== firstMax) {
      secMax = arr[i];
    }
  }

  if (secMax === -Infinity) {
    console.log("Không có số lớn thứ hai trong mảng");
  } else {
    console.log("Số lớn thứ hai trong mảng là:", secMax);
  }
}
