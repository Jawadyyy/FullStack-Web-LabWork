const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");

function updateCounters() {
  const tasks = document.querySelectorAll(".list-group-item");
  const completed = document.querySelectorAll(".completed");
  totalCount.textContent = tasks.length;
  completedCount.textContent = completed.length;
}

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("text-decoration-line-through");
    li.classList.toggle("completed");
    updateCounters();
  });

  const delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger btn-sm ms-2";
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateCounters();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  updateCounters();
});
