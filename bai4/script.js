let input = prompt("Nhập một dãy số bất kỳ:");

let flag = true;
for (let i = 0; i < input.length; i++) {
  if (input[i] < "0" || input[i] > "9") {
    flag = false;
    break;
  }
}
if (flag) {
  let arr = input.split("").map(Number); //split tach thanh mang, xong map chuyen string thanh so
  let max = Math.max(...arr); // "..." spread operator thay vì ghi arr[0], arr[1],...
  console.log(`${max} là số lớn nhất trong dãy số`);

//   let maxNumber = arr[0]; 
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i]; // Cập nhật số lớn nhất
//     }
//   }
//   console.log(maxNumber);
} else {
  console.log("Dãy không hợp lệ");
}
