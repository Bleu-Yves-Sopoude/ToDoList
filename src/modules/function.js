let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export default function addTrash(event) {
  const eventCatcher = event.target.closest('button');
  eventCatcher.style.display = 'none';
  const liItem = event.target.closest('li');
  const nodeList = liItem.querySelectorAll('p');
  const parentLi = nodeList[0].parentNode;
  const parentId = parentLi.getAttribute('id');
  const parentElement = document.getElementById(parentId);
  const newBtn = document.createElement('button');
  newBtn.className = 'newButton';
  newBtn.innerHTML = '<i class="fa fa-trash-alt"></i>';
  parentElement.append(newBtn);
  liItem.style.backgroundColor = '#ffe6ee';
  const editTask = liItem.querySelector('p');
  editTask.setAttribute('contenteditable', true);
  const listId = parentLi.getAttribute('id');
  const index = parseInt(listId.substring(1), 10);

  function updateTaskDescription(taskIndex, updatedDescription) {
    tasks = tasks.map((task) => (task.index === taskIndex
      ? { ...task, description: updatedDescription } : task));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function deleteList(taskIndex) {
    tasks = tasks.filter((task) => task.index !== taskIndex);
    tasks.forEach((task, i) => { task.index = i + 1; });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  }

  editTask.addEventListener('input', () => {
    const updatedDescription = editTask.innerHTML;
    updateTaskDescription(index, updatedDescription);
  });

  const trash = document.getElementsByClassName('newButton');
  trash[0].addEventListener('click', () => {
    deleteList(index);
  });
}