let toan = Number(prompt(`nhap diem toan`));
let van = Number(prompt(`nhap diem van`));
let anh = Number(prompt(`nhap diem anh`));

let avg = (toan + van + anh) / 3;

if(avg >= 8.0){
    console.log(`gioi`);
} else if(avg >= 6.5 && avg <= 7.9){
    console.log(`Kha`);
} else if(avg >= 5.0 && avg <= 6.4){
    console.log(`trung binh`);
} else{
    console.log(`yeu`);
}