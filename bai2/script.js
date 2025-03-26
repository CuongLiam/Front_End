let number = [1, 2, 3, 4, 5, 6];

let input = Number(window.prompt(`nhập số đoán bingo`));

let flag = false;
for (let i = 0; i < number.length; i++) {
  if (input === number[i]) {
    flag = true;
    console.log(`bingo!`);
    break;
  }
}
if (!flag) {
  console.log(`chuc ban may man lan sau`);
}
