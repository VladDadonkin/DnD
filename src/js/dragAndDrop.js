import { saveTasks } from "./storage";

export function addDrop(taskListElement) {
  if (!taskListElement) return;

  const makeDraggble = () => {
    const taskElements = taskListElement.querySelectorAll(".task");
    for (const task of taskElements) {
      task.draggable = true;
    }
  };

  makeDraggble();

  const observer = new MutationObserver(() => {
    makeDraggble();
  });

  observer.observe(taskListElement, { childList: true });

  taskListElement.addEventListener("dragstart", (event) => {
    if (event.target.classList.contains("task"))
      event.target.classList.add("dragged");
  });

  taskListElement.addEventListener("dragend", (event) => {
    event.target.classList.remove("dragged");
  });

  taskListElement.addEventListener("dragover", (event) => {
    event.preventDefault();

    const activeEl = document.querySelector(".dragged");
    const currentEl = event.target;
    const isTask = currentEl.classList.contains("task");

    if (!activeEl) return;

    if (isTask && activeEl !== currentEl) {
      const nextEl =
        currentEl === activeEl.nextElementSibling
          ? currentEl.nextElementSibling
          : currentEl;
      taskListElement.insertBefore(activeEl, nextEl);
    } else if (!isTask && currentEl === taskListElement) {
      taskListElement.appendChild(activeEl);
    }

    saveTasks();
  });
}
