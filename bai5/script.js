let arr = [-2,1,3,5,6,-3];
// let array = prompt(`nhap vao mot mang bat ki`);
// arr = array.split(",").map(Number);

function findPos(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        console.log(`khong cos so nguyen duong trong mang`);
        return;
    }
    for(let i = 0; i<arr.length ; i++){
        if(!Number.isInteger(arr[i])){
            return;
        } else{
            if(arr[i] >= 0){
                console.log(arr[i]);               
            }
        }
    }
    return;
}

findPos(arr);