function convertDateFormat(dates) {
    if (!Array.isArray(dates) || dates.some(date => typeof date !== 'string')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let formattedDates = dates.map(date => {
        let dateParts = date.split("-");  // Tách ngày tháng năm
        if (dateParts.length !== 3) {
            return "Dữ liệu không hợp lệ"; // Kiểm tra nếu định dạng không đúng
        }
        return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; // Định dạng lại thành DD/MM/YYYY
    });

    // Kiểm tra và in kết quả
    if (formattedDates.length > 0) {
        console.log(formattedDates);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}

// Test cases
convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"]);  
// ["10/03/2025", "25/12/2024", "01/07/2023"]

convertDateFormat([]);                     
// Mảng không có phần tử nào

convertDateFormat("abc");                 
// Dữ liệu không hợp lệ

convertDateFormat(["2025-03-10", "2025-07-25"]);  
// ["10/03/2025", "25/07/2025"]
