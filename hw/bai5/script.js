const company = {
  name: "RikkeiSoft",
  location: "Hà Nội",
  employees: [
    { name: "Nguyễn Văn Luận", position: "Developer" },

    { name: "Nguyễn Văn Hoàng", position: "Tester" },

    { name: "Hoàng Nam Cao", position: "Manager" },
  ],
};

for (let i = 0; i < company.employees.length; i++) {
    console.log(company.name);
    console.log(company.employees[i].name);
    console.log("\n");
}

// company.employees.forEach(function(key){ 
//     console.log(key.name);  
// })

// company.employees.forEach((key) => console.log(key.name))

