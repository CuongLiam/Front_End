function convertDateFormat(dates) {
    if (!Array.isArray(dates) || dates.some(date => typeof date !== 'string')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let formattedDates = [];

    for (let i = 0; i < dates.length; i++) {
        let date = dates[i];
        let datePart = date.split("-"); // chia ra
        if (datePart.length !== 3) {
            formattedDates.push("Dữ liệu không hợp lệ");
        } else {
            // DD/MM/YYYY
            formattedDates.push(`${datePart[2]}/${datePart[1]}/${datePart[0]}`);
        }
    }

    if (formattedDates.length > 0) {
        console.log(formattedDates);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}

convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"]);  
convertDateFormat([]);                     
convertDateFormat("abc");                 
convertDateFormat(["2025-03-10", "2025-07-25"]);  
