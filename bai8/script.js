function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }

    let hasUpperCase = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUpperCase = true;
            break;
        }
    }
    if (!hasUpperCase) {
        return false;
    }

    let hasLowerCase = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'a' && password[i] <= 'z') {
            hasLowerCase = true;
            break;
        }
    }
    if (!hasLowerCase) {
        return false;
    }

    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
            break;
        }
    }
    if (!hasNumber) {
        return false;
    }

    return true;
}
console.log(isStrongPassword("Abc123!@"));
console.log(isStrongPassword("weakpass"));
console.log(isStrongPassword("ABC12345"));
