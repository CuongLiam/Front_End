// let result = "javascript" + 5; // javascript5,  nối chuỗi xem 5 ở đây là chuỗi
// let result = "javascript" - 1; //NaN chuỗi trừ đi 1 số thì không hợp lễ khi "javascript" không phải là số(NaN)
// let result = "3" + 2; //32 nối chuỗi do "3" là chuỗi nên js tự động ép 2 lại thành chuỗi
// let result = "5" - 4; //1 riêng phép trừ thì tự động ép kiểu "5" chuỗi về thành số và lấy 5-4
// let result =  isNaN( "123"); // false vì rõ ràng 123 là số nên NaN sẽ false
// let result = isNaN("hello"); //true vì hello là chuỗi không phải số NaN
// let result = Number.isNaN("123"); // vẫn là false như trên
// let result = Number.isNaN(NaN); // true vì NaN là NaN không thể ép kiểu Number được

console.log(result);