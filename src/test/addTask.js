function addTask(description) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

module.exports = addTask;