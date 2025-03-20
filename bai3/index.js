let choice = Number(
  prompt(`1. VND -> USD\n2. USD -> VND\nmoi chon lua chon cua ban`)
);

let value;
switch (choice) {
  case 1: {
    value = Number(prompt(`Nhập số tiền bạn muốn chuyển (VND - USD)`));
    console.log(`${value}VND = ${(value / 26000).toFixed(6)}USD`);
    break;
  }
  case 2: {
    value = Number(prompt(`Nhập số tiền bạn muốn chuyển (USD - VND)`));
    console.log(`${value}USD= ${value * 26000}VND`);
    break;
  }
  default: {
    console.log(`giá trị không hợp lệ`);
  }
}
