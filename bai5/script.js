const employees = [
  { id: 1, name: "example1", age: 18, address: "New York" },
  { id: 2, name: "example2", age: 22, address: "Canada" },
  { id: 3, name: "example3", age: 19, address: "California" },
];

const tableBody = document.querySelector("#employeeTable tbody");

employees.forEach((key, index) => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${index + 1}</td>
      <td>${key.name}</td>
      <td>${key.age}</td>
      <td>${key.address}</td>
    `;

  tableBody.appendChild(row);
});
