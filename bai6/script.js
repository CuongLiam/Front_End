let arr = [1, 0, 9, "hello", null, undefined, 301, false, true, "", NaN];

// for (let i = arr.length- 1; i >=0; i--) {
//   if (!arr[i]) {
//     arr.splice(i, 1);
//   }
// }

arr = arr.filter(value => Boolean(value));

console.log(arr);
