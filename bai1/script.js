let numberArray = [];

let input = Number(prompt(`nhap so muon them vao mang`))

// numberArray[0] = input;
// numberArray.push(input);
// numberArray.unshift(input);
numberArray.splice(0, 0, input);

console.log(`numberArray = `+ numberArray);