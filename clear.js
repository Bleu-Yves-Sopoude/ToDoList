import { tasks, saveTasks } from './tasks.js';

function clearCompletedTasks() {
  const completedTasks = tasks.filter((task) => task.completed);
  completedTasks.forEach((task) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
  });
  tasks.forEach((task, i) => {
    task.index = i;
  });
  saveTasks(); // Call saveTasks to update localStorage
}

export default clearCompletedTasks;
