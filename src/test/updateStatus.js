// Path: src/updateStatus.js

// Update the existing updateTaskStatus function
function updateTaskStatus(index, completed, tasks, saveTasks) {
    tasks[index].completed = completed;
    saveTasks();
  }
  
  export { updateTaskStatus };
  