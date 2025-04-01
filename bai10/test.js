let products = [
  ["mì tôm", 5, 5000],
  ["bánh mì", 12, 15000],
  ["bánh bao", 5, 8000],
  ["mèn mén", 30, 20000],
];

let cart = [];

function showProducts() {
  console.log("Danh sách sản phẩm:");
  products.forEach(function (p) {
    console.log(`${p[0]} - Số lượng: ${p[1]} - Giá: ${p[2]} VND`);
  });
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
    console.log("Sản phẩm không có trong cửa hàng.");
    return;
  }
  if (product[1] === 0) {
    console.log("Sản phẩm đã hết hàng.");
    return;
  }
  product[1]--;
  let cartItem = findCartItem(name);
  if (cartItem) {
    cartItem[1]++;
  } else {
    cart.push([name, 1, product[2]]);
  }
  console.log(`Đã thêm ${name} vào giỏ hàng.`);
}

function showCart() {
  console.log("Giỏ hàng của bạn:");
  cart.forEach(function (p) {
    console.log(`${p[0]} - Số lượng: ${p[1]} - Giá: ${p[2]} VND`);
  });
}

function checkout() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i][1] * cart[i][2];
  }
  showCart();
  console.log(`Tổng tiền: ${total} VND`);
  console.log("Cảm ơn bạn đã mua sắm!");
}
