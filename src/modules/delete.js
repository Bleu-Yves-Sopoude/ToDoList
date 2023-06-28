function deleteList(taskIndex) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter((task) => task.index !== taskIndex);
    tasks.forEach((task, i) => {
      task.index = i + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  }
  
  module.exports = deleteList;
  