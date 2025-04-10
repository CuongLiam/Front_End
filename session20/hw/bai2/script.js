let num = prompt(`Nhap 1 so nguyen`);

if(num <= 0 || isNaN(num) === true){
    console.log(`du lieu nhap vao khong hop le`);
} else{
    let result;
    console.log(`cac so chia het cho 5 tu 1 den ${num} la: `);
    
    for(let i = 1; i <= num; i++){
        if(i % 5 ===0){
            console.log(i);
        }
    }
}