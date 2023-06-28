function deleteTask(index, tasks) {
    tasks.splice(index, 1);
    tasks.forEach((task, i) => {
      task.index = i;
    });
    saveTasks(tasks);
  }
  
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  export { deleteTask };
  