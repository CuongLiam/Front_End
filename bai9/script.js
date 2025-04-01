let arr = [];
let arr2 = [];

while (true) {
  let choice = Number(
    prompt(`=============== MENU ===============
1. Them phan tu
2. Hien thi phan tu
3. In chan, tong chan
4. Max, min
5. PrimeNum and sum
6. Thong ke co bao nhieu 
7. Thêm một phần từ vào vị trí chỉ định
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
      alert(`array: ${arr}`);
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
    case 4: {
      let maxNum = arr[i],
        minNum = arr[i];

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
          arr[i] = maxNum;
        }
        if (arr[i] < minNum) {
          arr[i] = minNum;
        }
      }
      alert(`so lon nhat la ${maxNum}, so nho nhat la ${minNum}`);
      break;
    }
    case 5: {
      let sum = 0;
      let arrPrime = [];

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 2) continue;

        let isPrime = true;
        for (let j = 2; j * j <= arr[i]; j++) {
          if (arr[i] % j === 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) {
          arrPrime.push(arr[i]);
          sum += arr[i];
        }
      }

      alert(`day cac so la so nguyen to : ${arrPrime}\ntong la: ${sum}`);
    }

    case 6: {
      let findNum = Number(prompt(`Nhap 1 so muon thong ke`));
      let count = 0;
      for (value of arr) if (value === findNum) count++;

      alert(`phan tu ${findNum} xuat hien ${count} lan`);
      break;
    }
    case 7: {
      let addPosition = Number(
        prompt(`nhap vi tri ban muon them: (1-${arr.length})`)
      );
      let addValue = Number(prompt(`nhap gia tri ban muon them: `));
      if (
        isNaN(addPosition) ||
        isNaN(addValue) ||
        addPosition < 1 ||
        addPosition > arr.length + 1
      ) {
        alert("Vi tri hoac gia tri khong hop le!");
        break;
      }
      
      
      // addPosition -= 1;
      // arr.splice(addPosition, 0, addValue);
      
      let newArr = [];
      for (let i = 0; i <= arr.length; i++) {
        if (i === addPosition - 1) {
          newArr.push(addValue);
        }
        if (i < arr.length) {
          newArr.push(arr[i]);
        }
      }
      arr = newArr;
      alert(`Mảng sau khi thêm: ${arr}`);
      break;
    }
    case 8:
      alert("Chương trình kết thúc.");
      break;

    default:
      alert("Vui lòng nhập số từ 1 -> 8");
      break;
  }

  if (choice === 8) break;
}
