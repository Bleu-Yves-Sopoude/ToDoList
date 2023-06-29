function clearCompletedTasks(tasks, saveTasks) {
  const newTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  newTasks.forEach((task) => {
  tasks.push(task);
  });
  saveTasks();
}

module.exports = { clearCompletedTasks };