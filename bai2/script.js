let countOdd = 0;

for(let i = 0; i < 5; i++){
    let n = parseInt(prompt(`nhap so nguyen thu ${i+1}`));
    if(isNaN(n)){
        alert(`khong hop le`);
        break;
    }

    if(n % 2 !== 0){
        countOdd++;
    }
}
alert(`so luong so le la ${countOdd}, so chan la ${5 - countOdd}`);