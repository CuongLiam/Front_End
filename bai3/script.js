let arr = [1,2,3,4,5,65,5,8,22,13,24];

function evenNum(arr){
    let arr2 = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
console.log(evenNum(arr));

