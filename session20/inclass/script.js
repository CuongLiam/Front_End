// menu

// alert(`======Menu========= \n1.dosomething\n2.dosomething\n3.dosomething\n4.dosomething`);

let choice;

do {
  choice = Number(
    window.prompt(
      `======Menu=========\n1. Do something\n2. Do something\n3. Do something\n4. Do something\n0. Exit\nMời bạn chọn chức năng:`
    )
  );

  switch (choice) {
    case 1:
      console.log(`Bạn đã chọn chức năng 1`);
      break;
    case 2:
      console.log(`Bạn đã chọn chức năng 2`);
      break;
    case 3:
      console.log(`Bạn đã chọn chức năng 3`);
      break;
    case 4:
      console.log(`Bạn đã chọn chức năng 4`);
      break;
    case 0:
      console.log(`Thoát chương trình.`);
      break;
    default:
      console.log(`Vui lòng chọn số từ 0 đến 4.`);
  }
} while (choice !== 0);
