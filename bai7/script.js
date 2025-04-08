let todoList = [
  { id: 1, task: "Hit the gym", completed: false },
  { id: 2, task: "Pay bills", completed: true },
  { id: 3, task: "Meet George", completed: false },
];

const ul = document.getElementById("myUL");
const input = document.getElementById("myInput");
const addBtn = document.querySelector(".addBtn");

function renderTodoList() {
  ul.innerHTML = "";
  todoList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.task;
    if (item.completed) li.classList.add("checked");

    li.addEventListener("click", function (e) {
      if (e.target.classList.contains("close")) return;
      item.completed = !item.completed;
      renderTodoList();
    });

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.textContent = "×";
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      todoList = todoList.filter((t) => t.id !== item.id);
      renderTodoList();
    });

    li.appendChild(closeBtn);
    ul.appendChild(li);
  });
}
addBtn.addEventListener("click", function () {
  const newTask = input.value.trim();
  if (newTask !== "") {
    todoList.push({
      id: Date.now(),
      task: newTask,
      completed: false,
    });
    input.value = "";
    renderTodoList();
  }
});

renderTodoList();
