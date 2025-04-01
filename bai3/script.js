function filterValidEmails(emails) {
    if (!Array.isArray(emails) || emails.some(email => typeof email !== 'string')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let validEmails = emails.filter(email => email.includes("@") && !email.includes(" "));
    // function checkEmail(email) {
    //     return email.includes("@") && !email.includes(" ");
    // }

    if (validEmails.length > 0) {
        console.log(validEmails);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}

filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space @out.com"]); 

filterValidEmails([]);    

filterValidEmails("abc");

