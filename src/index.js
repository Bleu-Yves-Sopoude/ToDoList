import './styles/style.css';
import addTrash from './modules/function.js';

const input = document.getElementById('input');

const target = document.getElementById('list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveToLocalStorage(data) {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(data);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const inputValue = input.value;
    const newObj = {
      description: inputValue,
      completed: false,
      index: tasks.length + 1,
    };
    saveToLocalStorage(newObj);
    window.location.reload();
    input.value = '';
  }
});

for (let i = 0; i < tasks.length; i += 1) {
  const { index, description } = tasks[i];
  target.innerHTML += `
      <li id="L${index}" class ="common">
      <input for ="P${index}" id="input" type="checkbox" class ="checkbox">
      <p id ="P${index}" class="li-p">${description}</p>
      <button id="edit-remove${index}"  class="btn dots list-item">
       <i class="fa fa-ellipsis-v"></i>
      </button>
      </li>
    `;
}

const deleteBtn = document.querySelectorAll('.list-item');
deleteBtn.forEach((button) => {
  button.addEventListener('click', addTrash);
});
