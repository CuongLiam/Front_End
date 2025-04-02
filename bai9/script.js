function sortEvenNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 ===0 ).sort((a, b) => a - b);
  
    let evenIndex = 0;
  
    return arr.map(num => {
      if (num % 2 === 0) {
        return evenNumbers[evenIndex++];
      }
      return num;
    });

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //       arr[i] = evenNumbers[evenIndex++];
    //     }
    //   }
    
    //   return arr;
  }
  
  const arr = [5, 8, 2, 3, 4, 1, 7];
  console.log(sortEvenNumbers(arr));
  