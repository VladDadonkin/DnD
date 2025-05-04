import { loadTasks } from "./storage.js";
import { TaskBoard } from "./TaskBoard.js";
import { addDrop } from "./dragAndDrop.js";

document.addEventListener("DOMContentLoaded", () => {
  const boards = document.querySelectorAll(".board-items");
  boards.forEach((board) => {
    new TaskBoard(board);

    const taskList = board.querySelector(".task-list");
    addDrop(taskList);
  });

  loadTasks();
});

// const containers = document.querySelectorAll('.board-items');
// const forms = document.querySelectorAll('.form');
// const addBtns = document.querySelectorAll('.btn-add');
// const removeBtns = document.querySelectorAll('.btn-remove');

// addBtns.forEach((addBtn, index) => {
//     addBtn.addEventListener('click', (e) => {
//         e.preventDefault();

//         const form = forms[index];
//         const board = containers[index];

//         let input = form.querySelector('.task-input');
//         if (!input) {
//             input = document.createElement('input');
//             input.type = 'text';
//             input.placeholder = 'Введите задачу';
//             input.classList.add('task-input');

//             form.insertBefore(input, form.firstElementChild);
//         }

//         input.addEventListener('keydown' , (e) => {
//             if (e.key === 'Enter' && input.value.trim() !== '') {
//                 const task = document.createElement('div');
//                 task.classList.add('task');
//                 task.textContent = input.value.trim();

//                 let taskList = board.querySelector('.task-list');
//                 if (!taskList) {
//                     taskList = document.createElement('div');
//                     taskList.classList.add('task-list');
//                     board.insertBefore(taskList, form);
//                 }

//                 taskList.appendChild(task)
//                 input.value = ''
//             }
//         })

//         console.log('Add button clicked');
//     });
// });

// removeBtns.forEach((removeBtn, index) => {
//     removeBtn.addEventListener('click', (e) => {
//         e.preventDefault();

//         const form = forms[index];
//         const input = form.querySelector('.task-input');

//         if(input) {
//             input.remove();
//         }

//         console.log('click remove')
//     })
// })
