let n = prompt(`nhap so phan tu muon them`);

if(n < 0 || isNaN(n)){
    console.log(`khong co ki tu so`);
} else{
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = prompt(`array[${i}] = `);
    }

    for(let i = 0; i < n; i++){
        if(!isNaN(arr[i])){
            console.log(arr[i]);
        }
    }
}
