let year = Number(prompt(`nhập năm`));

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear ? `${year} là năm nhuận` : `${year} không phải là năm nhuận`);