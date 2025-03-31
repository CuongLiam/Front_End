let arr = [];

while (true) {
  let choice = Number(
    prompt(`=============== MENU ===============
1. Nhập số phần tử cần nhập và giá trị các phần tử 
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. 
6. 
7. 
8. Thoát chương trình
===================================
Nhập lựa chọn:`)
  );
  switch (choice) {
    case 1: {
      let n = Number(prompt(`ban muon nhap bao nhieu phan tu?`));
      if (isNaN(n) || n <= 0) {
        console.log(`khong hop le`);
        break;
      }
      for (let i = 0; i < n; i++) {
        let value = Number(prompt(`phan tu ${i + 1}`));
        arr.push(value);

        if (isNaN(value)) {
          console.log(`khong hop le, hay nhap lai`);
          i--;
          break;
        }
      }
      break;
    }
    case 2: {
      alert("array: ", arr);
      break;
    }
    case 3: {
      let evenNums = [];
      let evenSum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          evenNums.push(arr[i]);
          evenSum += arr[i];
        }
      }
      alert(`cac phan tu so chan la: ${evenNums}
                tong so chan la ${evenSum}`);
      break;
    }
    case 4:{
        let maxNum = arr[i], minNum =arr[i];

        for(let i = 0; i < arr.length; i++){
            if(arr[i] > maxNum){
                arr[i] = maxNum;
            }
            if(arr[i] < minNum){
                arr[i] = minNum;
            }
        }
        alert(`so lon nhat la ${maxNum}, so nho nhat la ${minNum}`);
      break;
    }
    case 5:{
        let count = 0;
        let check = 2;

        let arrPrime = [];

        while(check < arr.length){
            let flag = true;
            for(let i = 2; i*i <= check; i++){
                if(check % arr[i] == 0){
                    flag = false;
                    break;
                }
            }

            if(flag){
                
                count++;
            }
        }

    }

    case 6:
      break;

    case 7:
      break;

    case 8:
      alert("Chương trình kết thúc.");
      break;

    default:
      alert("Vui lòng nhập số từ 1 -> 8");
      break;
  }

  if (choice === 8) break;
}
