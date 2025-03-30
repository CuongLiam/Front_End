let arr = [9,2,3,1,5,6];

function isArray(arr){
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log(`dữ liệu không hợp lệ hoặc mảng rỗng`);
        return false;
    }
    return true;
}
function minNum(arr){
    let a = arr[0];
    for(let i=0; i< arr.length; i++){
        if(arr[i] < a ){
            a = arr[i];
        }
    }
    return a;
}

isArray(arr);
console.log(`phần tử nhỏ nhất trong mãng là: ${minNum(arr)}`);
