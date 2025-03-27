let arr = [9, 8, 7, 3, 4, 5, 5, 3, 5, 1, 5, 6, 7, 8];

let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (arr2.indexOf(arr[i]) === -1) { //***so gud***
    if (count > 1) {
      console.log(`${arr[i]} bị trùng`);
    }
    arr2.push(arr[i]);
  }
}
for (let i = 0; i < arr2.length - 1; i++) {
  for (let j = 0; j < arr2.length - 1 - i; j++) {
    if (arr2[j] > arr2[j + 1]) {
      let temp = arr2[j];
      arr2[j] = arr2[j + 1];
      arr2[j + 1] = temp;
    }
  }
}
console.log(arr2);
