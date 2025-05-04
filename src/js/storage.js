export function saveTasks() {
  const boards = [];

  document.querySelectorAll(".board-items").forEach((board) => {
    const tasks = [];
    board.querySelectorAll(".task-list .task").forEach((task) => {
      tasks.push(task.firstChild.textContent);
    });
    boards.push(tasks);
  });

  localStorage.setItem("boards", JSON.stringify(boards));
}

export function loadTasks() {
  const data = JSON.parse(localStorage.getItem("boards"));
  if (!data) return;

  document.querySelectorAll(".board-items").forEach((board, boardIndex) => {
    const taskList = board.querySelector(".task-list");

    data[boardIndex]?.forEach((text) => {
      const task = document.createElement("div");
      task.classList.add("task");
      task.textContent = text;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("task-delete-btn");

      deleteBtn.addEventListener("click", () => {
        task.remove();
        saveTasks();
      });

      task.appendChild(deleteBtn);
      taskList.appendChild(task);
    });
  });
}

export function clearTasks() {
  localStorage.removeItem("boards");
}
