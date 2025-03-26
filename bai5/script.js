let arr = [];
let n = Number(prompt(`nhap so luong chu so muon xet`));

for(let i = 0; i < n; i++){
    arr[i] = Number(prompt(`arr[${i}] = `));
}

let oddSum = 0, evenSum = 0;

for(let j = 0; j < n ; j++){
    if(arr[j] % 2 === 0){
        evenSum += arr[j];
    } else{
        oddSum += arr[j];
    }
}

console.log(`tong cac so chan la ` + evenSum);
console.log(`tong cac so le la ` + oddSum);
