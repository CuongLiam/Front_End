const courses = [
  {
    id: 1,
    content: "Learn Javascript Session 01",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Anh Bách",
  },
  {
    id: 2,
    content: "Learn Javascript Session 2",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Lâm",
  },
  {
    id: 3,
    content: "Learn CSS Session 1",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Hiếu Ci Ớt Ớt",
  },
];

function saveToLocalStorage(data) {
  localStorage.setItem("taskList", JSON.stringify(data));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("taskList")) || [];
}

function renderTable(data) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  data.forEach((task, index) => {
    tbody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${task.content}</td>
          <td>${task.dueDate}</td>
          <td>${task.status}</td>
          <td>${task.assignedTo}</td>
          <td>
            <button class="btn btn-sm btn-secondary" onclick="editTask(${
              task.id
            })">Sửa</button>
            <button class="btn btn-sm btn-danger" onclick="deleteTask(${
              task.id
            })">Xóa</button>
          </td>
        </tr>
      `;
  });
}

function deleteTask(id) {
  let tasks = getFromLocalStorage();
  tasks = tasks.filter((task) => task.id !== id);
  saveToLocalStorage(tasks);
  renderTable(tasks);
}

document.getElementById("submitBtn").addEventListener("click", function () {
  const content = document.getElementById("content").value;
  const dueDate = document.getElementById("dueDate").value;
  const status = document.getElementById("status").value;
  const username = document.getElementById("username").value;

  if (!content || !dueDate || !status || !username)
    return alert("Điền đầy đủ thông tin");

  const tasks = getFromLocalStorage();
  const newTask = {
    id: Date.now(),
    content,
    dueDate,
    status,
    assignedTo: username,
  };

  tasks.push(newTask);
  saveToLocalStorage(tasks);
  renderTable(tasks);

  document.getElementById("content").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("status").value = "";
  document.getElementById("username").value = "";
});

function editTask(id) {
  alert("Chức năng Sửa đang phát triển tiếp sau nhé!");
}

document.addEventListener("DOMContentLoaded", function () {
  let tasks = getFromLocalStorage();
  if (tasks.length === 0) {
    saveToLocalStorage(courses);
    tasks = courses;
  }
  renderTable(tasks);
});
