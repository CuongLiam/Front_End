let n = Number(prompt(`nhap so luong muon nhap`));

let arr = [];
for(let i = 0; i < n; i++){
    let value = 0;
    value = Number(prompt(`nhap so thu ${i+1}`));

    if(isNaN(value) || value < 0){
        alert(`khong hop le, moi nhap lai`);
        i--;
    } else {
        arr.push(value);
    }
}

console.log(arr);

let flag = true;
for(let i = 2; i < n; i++){
    if(arr[i] !== arr[i-1] + arr[i-2]){
        flag = false;
    }
}

if (flag) {
    console.log(`la day fibo`);   
} else{
    console.log(`khong la day fibo`);
    
}