let n = Number(prompt(`nhap so n`));

function isPrime(num){
    if(n < 2 || isNaN(n)) return false;

    for(let i = 2; i*i <= num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}

if(isPrime(n)){
    console.log(`la so nguyen to`);
} else{
    console.log(`ko la so nguyen to`);
}