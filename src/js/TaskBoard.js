import { TaskForm } from './TaskForm.js';

export class TaskBoard {
    constructor(container) {
        this.container = container;
        this.form = container.querySelector('.form');
        this.addBtn = this.form.querySelector('.btn-add');
        this.removeBtn = this.form.querySelector('.btn-remove');
        this.taskList = this._getOrCreateTaskList();

        this._setup();
    }

    _getOrCreateTaskList() {
        let list = this.container.querySelector('.task-list');
        if (!list) {
            list = document.createElement('div');
            list.classList.add('task-list');
            this.container.insertBefore(list, this.form);
        }
        return list;
    }

    _setup() {
        const taskForm = new TaskForm(this.form, this.taskList);

        this.addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            taskForm.showInput();
        });

        this.removeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            taskForm.removeInput();
            
        });
    }
}
