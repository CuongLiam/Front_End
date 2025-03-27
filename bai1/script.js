let arr = [1,2,3,4,10,20,12,5,6,3]
let flag = false;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] >= 10){
//         console.log(arr[i]);
//     }
// }

for(let key of arr){
    if(key >=10){
        flag = true;
        console.log(key);
    }
}
if(!flag){
    console.log(`khong co so nao lon hon 10`);
}