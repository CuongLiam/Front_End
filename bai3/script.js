let input = prompt("Nhập một dãy số bất kỳ:");

let flag = true;
for (let i = 0; i < input.length; i++) {
  if (input[i] < "0" || input[i] > "9") {
    flag = false;
    break;
  }
}
if (flag) {
  let arr = [];
  let number = Number(input);

  while (number > 0) {
    arr.push(number % 10); // 12345 --> 5, 1234 --> 4
    number = Math.floor(number / 10); // 12345 --> 1234, 1234--> 123,
  }
  console.log(arr);

//   let reversedArray = input.split("").reverse(); // giu lai bien mang ****
//   let reversedString = reversedArray.join(""); // chuyen thanh chuoi
//   console.log(reversedString);
//   console.log(reversedArray);****
} else {
  console.log("Dãy không hợp lệ");
}
