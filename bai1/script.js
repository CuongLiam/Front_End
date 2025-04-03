function filterNumbers(arr) {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }

  let result = arr.filter((num, index) => num > 10)
  // let result = arr.filter(num => num >= 10);

//   let result = arr.filter(function (element, index) {
//     return element > 10;
//   });

  console.log(result.length > 0 ? result : "Mảng không có phần tử nào");
}

filterNumbers([1, 22, 10, 9, 8,33,11,19]);
filterNumbers([]);
filterNumbers("abc");
