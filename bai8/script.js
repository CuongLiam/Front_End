let arr = [9,123,4,5,3,3,3,3,36,32,4,4,5,6,7,1,5,0,23,4,5,0];

let mostFreq = 0;
let mostFreqNum = 0;

for(let i = 0; i < arr.length; i++){
    let count = 0;
    for(let j = 0; j< arr.length; j++){
        if(arr[i] === arr[j]){
            count++;
        }
    }
    if(count > mostFreq){
        mostFreq = count;
        mostFreqNum = arr[i];
    } else if(count === mostFreq && arr[i] < mostFreqNum){
        mostFreqNum = arr[i];
    }
}

console.log(`so xuat hien nhieu nhat la : `, mostFreqNum);
