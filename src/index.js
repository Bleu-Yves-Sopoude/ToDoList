import './style.css';
import {
  tasks,
  addTask,
  deleteTask,
  editTaskDescription,
  clearCompletedTasks,
} from './tasks.js';

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const todoList = document.getElementById('todo-list');
const addTaskButton = document.getElementById('add-task-button');
const newTaskInput = document.getElementById('new-task-input');
const clearAllButton = document.getElementById('clear-all-button');

function renderTasks() {
  todoList.innerHTML = '';

  tasks.forEach((task, i) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      saveTasks();
    });
    listItem.appendChild(checkbox);

    const taskDescription = document.createElement('span');
    taskDescription.classList.add('task-description');
    taskDescription.innerText = task.description;
    listItem.appendChild(taskDescription);

    const editTaskDescriptionButton = document.createElement('button');
    editTaskDescriptionButton.classList.add('edit-task-description');
    editTaskDescriptionButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    editTaskDescriptionButton.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = task.description;
      input.classList.add('task-input');
      input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          editTaskDescription(i, input.value);
          renderTasks();
        }
      });
      listItem.replaceChild(input, taskDescription);
      input.focus();
    });
    listItem.appendChild(editTaskDescriptionButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.style.display = 'none';
    deleteButton.addEventListener('click', () => {
      deleteTask(i);
      renderTasks();
    });
    listItem.appendChild(deleteButton);

    const ellipsisButton = document.createElement('button');
    ellipsisButton.classList.add('ellipsis-button');
    ellipsisButton.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
    ellipsisButton.addEventListener('click', () => {
      deleteButton.style.display = 'inline-block';
      ellipsisButton.style.display = 'none';
    });
    listItem.appendChild(ellipsisButton);

    todoList.appendChild(listItem);
  });
}

addTaskButton.addEventListener('click', () => {
  const newTaskDescription = newTaskInput.value;
  if (newTaskDescription.trim() !== '') {
    addTask(newTaskDescription);
    renderTasks();
    newTaskInput.value = '';
  }
});

newTaskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTaskButton.click();
  }
});

clearAllButton.addEventListener('click', () => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  incompleteTasks.forEach((task) => {
    tasks.push(task);
  });
  saveTasks();
  renderTasks();
});

renderTasks();

const clearCompletedButton = document.getElementById('clear-completed-button');
clearCompletedButton.addEventListener('click', () => {
  clearCompletedTasks();
  renderTasks();
});

addTaskButton.addEventListener('click', () => {
  clearCompletedButton.click();
});
