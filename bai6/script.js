let arr = [1,2,4,5,5,6,2,7,8,0];

let num = Number(prompt(`ban muon tim so gi?`));
let count = 0;

for(let i = 0; i < arr.length - 1 ; i++){
    if(arr[i] === num){
        count++;
    }
}
if(!count){
    console.log(`${num} ko ton tai torng mang`);
}else
console.log(`${num} xuat hien ${count} lan trong mang`);
