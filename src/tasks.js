const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  saveTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i;
  });
  saveTasks();
}

function editTaskDescription(index, description) {
  tasks[index].description = description;
  saveTasks();
}

function clearCompletedTasks() {
  const newTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  newTasks.forEach((task) => {
    tasks.push(task);
  });
  saveTasks();
}

export {
  tasks,
  addTask,
  deleteTask,
  editTaskDescription,
  saveTasks,
  clearCompletedTasks,
};
