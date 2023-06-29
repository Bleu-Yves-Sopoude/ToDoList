function updateTaskStatus(index, completed, tasks, saveTasks) {
  tasks[index].completed = completed;
  saveTasks();
}

export default updateTaskStatus;