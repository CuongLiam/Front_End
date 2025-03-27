let input = prompt(`nhập 1 dãy số bất kì: `);

let arr = input.split("").map(Number);

if (arr.length === 0 || input.trim() === "" || isNaN(input)) {
  console.log(`khong co so lon nhat`);
} else {
  let maxNum = arr[0];
  let maxIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      maxIndex = i;
    }
  }

  console.log(arr);
  console.log(`${maxIndex}: ${maxNum} la so lon nhat`);
}
