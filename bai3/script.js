let password = "admin@123"
let input;

while (true){
    input = prompt(`Nhập mật khẩu: `);

    if(input === password){
        alert(`access granted`);
        break;
    } else {
        alert(`wrong password pls try again`);
    }
}