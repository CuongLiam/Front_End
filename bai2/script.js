let productList = [];
let lastId = 0;

function createProduct(name, price, category, quantity) {
    lastId++;
    return {
        id: lastId,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    };
}

function addProduct() {
    let name = prompt("Nhập tên sản phẩm:");
    let price = parseFloat(prompt("Nhập giá sản phẩm:"));
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = parseInt(prompt("Nhập số lượng sản phẩm trong kho:"));

    let newProduct = createProduct(name, price, category, quantity);
    productList.push(newProduct);
    console.log("Sản phẩm đã được thêm thành công!");
}

function showAllProducts() {
    if (productList.length === 0) {
        console.log("Danh sách sản phẩm trống");
        return;
    }

    let text = productList.reduce((result, product, index) => { //index of array above
        return result + `${index + 1}. ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}\n`;
    }, "");

    console.log(text);
}

function showProductDetails() {
    let id = parseInt(prompt("Nhập ID sản phẩm muốn xem chi tiết:"));
    let product = productList.find(p => p.id === id);

    if (product) {
        console.log(`Chi tiết sản phẩm:
        ID: ${product.id}
        Tên: ${product.name}
        Giá: ${product.price}
        Danh mục: ${product.category}
        Số lượng: ${product.quantity}`);
    } else {
        console.log("Sản phẩm không tồn tại!");
    }
}

function updateProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm muốn cập nhật:"));
    let product = productList.find(p => p.id === id);

    if (product) {
        let newName = prompt("Nhập tên mới:", product.name);
        let newPrice = parseFloat(prompt("Nhập giá mới:", product.price));
        let newCategory = prompt("Nhập danh mục mới:", product.category);
        let newQuantity = parseInt(prompt("Nhập số lượng mới:", product.quantity), 10);

        product.name = newName;
        product.price = newPrice;
        product.category = newCategory;
        product.quantity = newQuantity;

        console.log("Sản phẩm đã được cập nhật!");
    } else {
        console.log("Sản phẩm không tồn tại!");
    }
}

function deleteProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm muốn xóa:"));
    let index = productList.findIndex(p => p.id === id);

    if (index !== -1) {
        productList.splice(index, 1);
        console.log("Sản phẩm đã được xóa!");
    } else {
        console.log("Sản phẩm không tồn tại!");
    }

    // let initialLength = productList.length;

    // productList = productList.filter(p => p.id !== id);

    // if (productList.length < initialLength) {
    //     console.log("Sản phẩm đã được xóa!");
    // } else {
    //     console.log("Sản phẩm không tồn tại!");
    // }
}

function filterByPriceRange() {
    let minPrice = parseFloat(prompt("Nhập giá thấp nhất:"));
    let maxPrice = parseFloat(prompt("Nhập giá cao nhất:"));

    let filteredProducts = productList.filter(p => p.price >= minPrice && p.price <= maxPrice);

    if (filteredProducts.length === 0) {
        console.log("Không có sản phẩm nào trong khoảng giá này");
        return;
    }

    let text = filteredProducts.reduce((result, product) => {
        return result + `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}\n`;
    }, "");

    console.log("Danh sách sản phẩm trong khoảng giá:\n" + text);
}

while (true) {
    let choice = prompt(`====== Quản Lý Sản Phẩm ======
1. Thêm sản phẩm
2. Hiển thị tất cả sản phẩm
3. Hiển thị chi tiết sản phẩm theo ID
4. Cập nhật thông tin sản phẩm theo ID
5. Xóa sản phẩm theo ID
6. Lọc sản phẩm theo khoảng giá
7. Thoát`);

    switch (choice) {
        case "1":
            addProduct();
            break;
        case "2":
            showAllProducts();
            break;
        case "3":
            showProductDetails();
            break;
        case "4":
            updateProduct();
            break;
        case "5":
            deleteProduct();
            break;
        case "6":
            filterByPriceRange();
            break;
        case "7":
            console.log("Chương trình đã kết thúc!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }

    if (choice === "7") {
        break;
    }
}
