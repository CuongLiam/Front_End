let products = [
  ["mì tôm", 5, 5000],
  ["bánh mì", 12, 15000],
  ["bánh bao", 5, 8000],
  ["mèn mén", 30, 20000],
];

let cart = [];

function showProducts() {
  console.log("Danh sách sản phẩm:");
  for (let i = 0; i < products.length; i++) {
    console.log(
      `${i + 1}. ${products[i][0]} - So luong: ${products[i][1]} - Gia: ${
        products[i][2]
      }vnd`
    );
  }
}

function findProduct(name) {
  for (let i = 0; i < products.length; i++) {
    if (products[i][0] === name) {
      return products[i];
    }
  }
  return undefined;
}

function findCartItem(name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i][0] === name) {
      return cart[i];
    }
  }
  return undefined;
}

function buyProduct(name) {
  let product = findProduct(name);
  if (!product) {
    console.log("Sản phẩm không có trong cửa hàng");
    return;
  }
  if (product[1] === 0) {
    console.log(`San pham da het hang`);
    return;
  }
  product[1]--;
  //=======================
  let carItem = findCartItem(name);
  if (carItem) {
    carItem[1]++;
  } else {
    cart.push([name, 1, product[2]]);
  }
  console.log(`da them ${name} vao gio hang`);
}

function showCart() {
  console.log("Giỏ hàng của bạn:");
  for (let i = 0; i < cart.length; i++) {
    console.log(
      `${i + 1}. ${cart[i][0]} - So luong: ${cart[i][1]} - Gia: ${
        cart[i][2]
      }vnd`
    );
  }
}

function checkout(){
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i][1] * cart[i][2];
    }
    showCart();
    console.log(`Tổng tiền: ${total} VND`);
    console.log("Cảm ơn bạn đã mua");
}
function menu() {
  while (true) {
    console.log(
      "\n1. Xem sản phẩm\n2. Mua hàng\n3. Xem giỏ hàng\n4. Thanh toán\n5. Thoát"
    );
    let choice = prompt("Chọn chức năng: ");
    switch (choice) {
      case "1":
        showProducts();
        break;
      case "2":
        let name = prompt("Nhập tên sản phẩm muốn mua: ");
        buyProduct(name);
        break;
      case "3":
        showCart();
        break;
      case "4":
        checkout();
        return;
      case "5":
        console.log("Thoát chương trình");
        return;
      default:
        console.log("Lựa chọn không hợp lệ");
    }
  }
}

// menu();
