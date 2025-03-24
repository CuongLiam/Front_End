let n = Number(prompt(`nhap so n`));
let flag = true;

if(n <= 1){
    flag = false;
}else {
    for(let i = 2; i*i <= n; i++){
        if(n % i === 0){
            flag = false;
            break;
        }
    }
}

if(flag){
    console.log(`${n} la so nguyen to`);
} else{
    console.log(`${n} ko phai la so nguyen to`);
}