<<<<<<< HEAD
// Path: src/updateStatus.js

// Update the existing updateTaskStatus function
function updateTaskStatus(index, completed, tasks, saveTasks) {
    tasks[index].completed = completed;
    saveTasks();
  }
  
  export { updateTaskStatus };
  
=======
const updateStatus = (index, completed) => {
    tasks[index].completed = completed;
    storeTasksToLocalStorage();
  };
  
  export default updateStatus;
>>>>>>> d702e3c7e9cd0f943388ac2292dcccdd3ca175bf
