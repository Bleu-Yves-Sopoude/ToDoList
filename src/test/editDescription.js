function editTaskDescription(index, description, tasks, saveTasks) {
  tasks[index].description = description;
  saveTasks();
}

module.exports = { editTaskDescription };
