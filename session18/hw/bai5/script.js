let year = Number(prompt(`nhap so nam kinh nghiem`))

if(year < 1){
    console.log(`moi vao nghe`);
} else if(year > 1 && year < 3){
    console.log(`Nhân viên có kinh nghiệm`);
} else if(year > 4 && year < 6){
    console.log(`Chuyên viên`);
} else if(year > 6 ){
    console.log(`Quan ly`);
}