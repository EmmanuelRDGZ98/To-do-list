document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        const span = document.createElement('span');
        span.textContent = taskText;
        span.contentEditable = true;
        li.appendChild(span);

        const buttonGroup = document.createElement('div');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Done';
        completeBtn.className = 'btn btn-success btn-sm mr-2';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
            li.style.textDecoration = li.classList.contains('completed') ? 'line-through' : 'none';
        });
        buttonGroup.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
        buttonGroup.appendChild(deleteBtn);

        li.appendChild(buttonGroup);

        return li;
    }

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
