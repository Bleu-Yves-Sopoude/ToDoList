
import '/Users/mrblue/Music/Microverse/Module 2/Projects/ToDoList/src/styles.css';

import populateHtmlForEachTask from '../modules/populateHtmlForEachTask.js';

import TasksList from '../modules/tasksListClass.js';

const tasks = new TasksList();

const storedTasks = JSON.parse(localStorage.getItem('storedTasks')) || [];
populateHtmlForEachTask(storedTasks);

const taskDescription = document.querySelector('#taskDescription');
const taskValidation = document.querySelector('#taskValidation');

taskValidation.addEventListener('click', () => {
  let addedTask = {};
  if (taskDescription.value === '') {
    document.querySelector('.error-message').textContent = "Please, the task's description is required";
  }
  if (taskDescription.value !== '') {
    document.querySelector('.error-message').textContent = '';
    addedTask = { description: taskDescription.value };
    document.querySelectorAll('.task-box').forEach((e) => e.remove());
    populateHtmlForEachTask(tasks.addTask(addedTask));
  }
  taskDescription.value = '';
});

const toDoListBox = document.querySelector('.to-do-list-box');
toDoListBox.addEventListener('click', (e) => {
  if (e.target && e.target.matches('i.trash')) {
    const index = Number(e.target.id.replace('d', ''));
    document.querySelectorAll('.task-box').forEach((e) => e.remove());
    populateHtmlForEachTask(tasks.deleteTask(index));
  }

  if (e.target && e.target.matches('i.edit')) {
    const targetClassList = e.target.classList;
    document.querySelector(`p.${targetClassList[0]}`).focus();
  }

  if (e.target && e.target.matches('input.check-box')) {
    const targetClassList = e.target.classList;
    tasks.changeTaskStatus(Number(targetClassList[0].replace('checkBox', '')));
  }
});

toDoListBox.addEventListener('input', (e) => {
  if (e.target && e.target.matches('p')) {
    const targetClassList = e.target.classList;
    tasks.editTask(Number(targetClassList[0].replace('d', '')));
  }
});

document.querySelector('.clear-all-completed').addEventListener('click', () => {
  tasks.clearAllCompleted();
  document.querySelectorAll('.task-box').forEach((e) => e.remove());
  populateHtmlForEachTask(tasks.clearAllCompleted());
});
