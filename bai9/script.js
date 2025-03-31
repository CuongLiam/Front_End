let users = [];

function isValidEmail(email) {
    return email.includes('@') && (email.endsWith('.com') || email.endsWith('.vn'));
}

function registerEmail(email) {
    if (!isValidEmail(email)) {
        console.log("%c❌ Email không hợp lệ", "background-color: red;");
        return;
    }

    if (users.includes(email)) {
        console.log("%c⚠️ Tài khoản đã exits", "background-color: orange;");
        return;
    }

    users.push(email);
    console.log("%c✅ Đăng ký thành công!" , "background-color: green;");
}

registerEmail("user@example.com");
registerEmail("userexamplecom");
registerEmail("user@examplecom.vn");
registerEmail("user@examplecom.vn");

console.log("Danh sách tài khoản:", users);
