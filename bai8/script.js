const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  const buttonContainer = document.createElement("div");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Sửa";
  editBtn.onclick = () => {
    const newText = prompt("Nhập nội dung mới:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Xóa";
  deleteBtn.onclick = () => {
    const confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");
    if (confirmDelete) {
      li.remove();
    }
  };

  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  li.appendChild(buttonContainer);
  taskList.appendChild(li);

  taskInput.value = "";
}
