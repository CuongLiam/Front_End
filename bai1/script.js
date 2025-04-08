while (true) {
    let choice = prompt(`========== MENU ==========
1. Hiển thị sản phẩm theo danh mục
2. Mua sản phẩm theo ID
3. Sắp xếp sản phẩm theo giá
4. Xem giỏ hàng và thanh toán
5. Thoát
Nhập lựa chọn:`);

    switch (choice) {
        case "1":
            showProductsByCategory();
            break;
        case "2":
            buyProduct();
            break;
        case "3":
            sortProducts();
            break;
        case "4":
            checkout();
            break;
        case "5":
            console.log("Tạm biệt!");
            break;
        default:
            console.log("Vui lòng chọn từ 1 đến 5.");
    }

    if (choice === "5") break;
}

let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let cart = [];

function showProductsByCategory() {
    let category = prompt("Nhập tên danh mục (vd: món ăn dân tộc Mông):");
    let filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    if (filtered.length === 0) {
        console.log("Không tìm thấy sản phẩm trong danh mục");
    } else {
        console.log("Sản phẩm trong danh mục:");
        filtered.forEach(p => {
            console.log(`ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, SL: ${p.quantity}`);
        });
    }
}

function buyProduct() {
    let id = Number(prompt("Nhập ID sản phẩm muốn mua:"));
    let product = products.find(p => p.id === id);

    if (!product) {
        console.log("Sản phẩm không tồn tại!");
        return;
    }

    let qty = Number(prompt(`Nhập số lượng muốn mua (hiện có: ${product.quantity}):`));
    if (qty <= 0 || isNaN(qty)) {
        console.log("Số lượng không hợp lệ.");
        return;
    }

    if (product.quantity === 0) {
        console.log("Sản phẩm đã hết hàng.");
    } else if (qty > product.quantity) {
        console.log("Không đủ hàng để mua.");
    } else {
        product.quantity -= qty;

        let cartItem = cart.find(c => c.id === id);
        if (cartItem) {
            cartItem.quantity += qty;
        } else {
            cart.push({ ...product, quantity: qty });
        }
        console.log("Mua thành công!");
    }
}
function sortProducts() {
    let type = prompt("Chọn kiểu sắp xếp:\n1. Tăng dần\n2. Giảm dần");
    let sorted = products.slice();

    if (type === "1") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (type === "2") {
        sorted.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }

    console.log("Danh sách sản phẩm sau sắp xếp:");
    sorted.forEach(p => {
        console.log(`ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, SL: ${p.quantity}`);
    });
}

function checkout() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log("========== Hóa đơn ==========");
    cart.forEach(item => {
        console.log(`${item.name} x${item.quantity} = ${item.price * item.quantity} VND`);
    });
    console.log(`Tổng tiền: ${total} VND`);
}
