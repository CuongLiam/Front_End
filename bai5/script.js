const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  li.innerHTML = `
    <span>${task}</span>
    <button class="btn-delete px-3">X</button>
  `;

  li.querySelector(".btn-delete").addEventListener("click", function () {
    const confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");
    if (confirmDelete) {
      li.remove();
    }
  });

  list.appendChild(li);
//   input.value = "";
});