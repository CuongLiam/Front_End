// let value1 = Boolean(1);
// let value2 = Boolean(0);
// let value3 = Boolean("Hello");
// let value4 = Boolean("");

// let value5 = "0" == false;

// console.log(value5);


// console.log(value1);
// console.log(value2);
// console.log(value3);
// console.log(value4);

// Các giá trị falsy
// Những giá trị sau đây sẽ được coi là false khi ép kiểu sang Boolean:
// false
// 0 (số không)
// "" (chuỗi rỗng)
// null
// undefined
// NaN (Not-a-Number)


// Các giá trị truthy
// Mọi giá trị khác không thuộc danh sách falsy đều được coi là true. Ví dụ:
// Bất kỳ chuỗi không rỗng nào ("abc", " ").
// Bất kỳ số khác 0 (1, -1, 3.14).
// Đối tượng ({}, []).


let trangThai = 201;

switch(trangThai){
    case 200:{
        console.log(`thanh cong`);
        break;
    }
    case 201:{
        console.log(`them thanh cong`);
        break;
    }
    case 400:{
        console.log(`loi request`);
        break;
    }
    case 404:{
        console.log(`khong tim thay `);
        break;
    }
    case 500:{
        console.log(`loi server`);
        break;
    }
    defaut
}

