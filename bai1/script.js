// let n = 2;
let n = Number(prompt(`nhap thang`));

if(n <= 0 || n > 12){
    console.log(`thang khong hop le`);
} else{
    if(n === 2){
        console.log(`thang 2 co 28 hoac 29 ngay nam nhuan`);
    }
    if(n === 1 || n === 3 || n === 5 || n === 7 || n === 8 || n === 10 || n === 12 ){
        console.log(`thang co 31 ngay`);
    }else {
        console.log(`thang co 30 ngay`);
    }
}
