let menu = {}; // {menu: {category: [{name, price, description}, ...]}, 
               // category: [{name, price, description}, ...]}
function addDish() {
    let category = prompt("Nhập danh mục món ăn (Món chính, Tráng miệng, Đồ uống):");
    let name = prompt("Nhập tên món ăn:");
    let price = Number(prompt("Nhập giá món ăn:"));
    let description = prompt("Nhập mô tả món ăn:");

    let dish = {
        name: name,
        price: price,
        description: description
    };

    if (!menu[category]) { // very gud
        menu[category] = []; // holy 
    }
    menu[category].push(dish);
    console.log("Đã thêm món ăn thành công!");
}

function deleteDish() {
    let name = prompt("Nhập tên món ăn muốn xóa:");

    let flag = false;

    for (let key in menu) { // for ...in = index, o day la category
        let index = menu[key].findIndex(dish => dish.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            menu[key].splice(index, 1);
            console.log(`Đã xóa món "${name}" khỏi danh mục "${key}".`);
            flag = true;
            break;
        }
    }

    if (!flag) {
        console.log("Không tìm thấy món ăn cần xóa.");
    }
}

function updateDish() {
    let name = prompt("Nhập tên món ăn cần cập nhật:");
    let flag = false;

    for (let key in menu) {
        let dish = menu[key].find(d => d.name.toLowerCase() === name.toLowerCase());
        if (dish) {
            dish.name = prompt("Nhập tên mới:");
            dish.price = Number(prompt("Nhập giá mới:"));
            dish.description = prompt("Nhập mô tả mới:");
            console.log("Cập nhật thành công!");
            flag = true;
            break;
        }
    }

    if (!flag) {
        console.log("Không tìm thấy món ăn để cập nhật.");
    }
}

function viewMenu() {
    if (Object.keys(menu).length === 0) {
        console.log("Menu đang trống.");
        return;
    }

    console.log("----- MENU NHÀ HÀNG -----");
    for (let key in menu) {
        console.log(`\n>>> Danh mục: ${key}`);
        menu[key].forEach((dish, idx) => {
            console.log(`${idx + 1}. Tên: ${dish.name} | Giá: ${dish.price} | Mô tả: ${dish.description}`);
        });
    }
}

function searchDish() {
    let name = prompt("Nhập tên món ăn cần tìm:");
    let flag = false;

    for (let key in menu) {
        let matched = menu[key].filter(dish => dish.name.toLowerCase().includes(name.toLowerCase()));
        if (matched.length > 0) {
            console.log(`\n>>> Kết quả trong danh mục "${key}":`);
            matched.forEach(dish => {
                console.log(`Tên: ${dish.name} | Giá: ${dish.price} | Mô tả: ${dish.description}`);
            });
            flag = true;
        }
    }

    if (!flag) {
        console.log("Không tìm thấy món ăn nào.");
    }
}

while (true) {
    let choice = prompt(`----- MENU CHỨC NĂNG -----
1. Thêm món ăn vào danh mục
2. Xóa món ăn theo tên
3. Cập nhật món ăn theo tên
4. Hiển thị toàn bộ menu
5. Tìm kiếm món ăn theo tên
6. Thoát
---------------------------`);

    switch (choice) {
        case "1":
            addDish();

            break;
        case "2":
            deleteDish();

            break;
        case "3":
            updateDish();

            break;
        case "4":
            viewMenu();

            break;
        case "5":
            searchDish();

            break;
        case "6":
            console.log("Tạm biệt!");
            break;
        default:
            console.log("Vui lòng chọn từ 1 đến 6.");
    }

    if (choice === "6") {
        break;
    }
}
