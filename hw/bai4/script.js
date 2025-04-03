let rectangle = {
    width: 10,
    height: 5,
// getArea: một phương thức trả về diện tích hình chữ nhật (width × height)

    // getArea : function(){
    //     return rectangle.width * rectangle.height;
    // }

    getArea : () => rectangle.width * rectangle.height
}

console.log(rectangle.getArea);
console.log(rectangle.getArea());
