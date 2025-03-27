let n = prompt(`nhap so phan tu muon them`);

if(n < 0 || isNaN(n)){
    console.log(`khong co ki tu so`);
} else{
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = prompt(`array[${i}] = `);
    }

    let sumNum = 0;
    for(let i = 0; i < n; i++){
        if(!isNaN(arr[i])){
            sumNum += +arr[i];
        }
    }
    console.log(sumNum);
}
