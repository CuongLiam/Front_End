let str = prompt(`nhap 1 chuoi`);

let key = prompt(`${str}\nNhap tu muon tim: `);
let flag = false;

for(let i = 0; i <= str.length; i++){
    if(str[i] === key){
        flag = true;
        console.log(`Tồn tại từ cần tìm kiếm`);
        break;
    }
}
if(!flag){
    console.log(`khong ton tai tu can tim kiem`);
}
