let n = Number(prompt(`nhap so nguyen bat ki`))

console.log(`uoc cua ${n} la:`);

for(let i = 1; i <= n; i++){
    if(n % i ===0){
        console.log(i);
    }
}