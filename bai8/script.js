// let month = Number(prompt(`nhập vào 1 tháng bất kì`));

// switch(true){
//     case (month >= 1 && month <= 3):{
//         console.log(`mùa xuân`);
//         break;
//     }
//     case (month >= 4 && month <= 6):{
//         console.log(`mùa hạ`);
//         break;
//     }
//     case (month >= 7 && month <= 9):{
//         console.log(`mùa thu`);
//         break;
//     }
//     case (month >= 10 && month <= 12):{
//         console.log(`mùa đông`);
//         break;
//     }
//     default:{
//         console.log(`khong hop le`);
//         break;
//     }
// } // dung switch-case o day kho hieu hon

// if-else

let month = Number(prompt(`Nhập vào một tháng bất kỳ (1-12):`));

if (month >= 1 && month <= 3) {
  console.log(`Mùa xuân`);

} else if (month >= 4 && month <= 6) {
  console.log(`Mùa hạ`);

} else if (month >= 7 && month <= 9) {
  console.log(`Mùa thu`);

} else if (month >= 10 && month <= 12) {
  console.log(`Mùa đông`);

} else {
  console.log(`Tháng không hợp lệ!`);
  
}
