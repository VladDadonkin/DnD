import { saveTasks } from "./storage";

export class TaskForm {
    constructor(form, taskList) {
        this.form = form;
        this.taskList = taskList;
        this.input = null;
    }

    showInput() {
        if (!this.input) {
            this.input = document.createElement('input');
            this.input.type = 'text';
            this.input.placeholder = 'Введите задачу';
            this.input.classList.add('task-input');
            this.form.insertBefore(this.input, this.form.firstElementChild);

            this.input.addEventListener('keydown', (e) => this._handleKeyDown(e));
        }
        this.input.focus();
    }

    removeInput() {
        if (this.input) {
            this.input.remove();
            this.input = null;
        }
    }

    _handleKeyDown(e) {
        if (e.key === 'Enter' && this.input.value.trim() !== '') {
            const task = document.createElement('div');
            task.classList.add('task');
            task.textContent = this.input.value.trim();


            

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('task-delete-btn');
           

            deleteBtn.addEventListener('click', () => {
                task.remove();
                saveTasks();
            });

            task.appendChild(deleteBtn);

            this.taskList.appendChild(task);
            this.input.value = '';

            saveTasks();
        }
    }

}
