// deleteTask.test.js
import { deleteTask } from '../modules/deleteTask';


describe('deleteTask', () => {
  beforeEach(() => {
    // Reset the tasks list before each test
    localStorage.clear();
  });

  it('should delete a task from the tasks list', () => {
    // Set up initial tasks list
    const initialTasks = [
      { description: 'Task 1', completed: false, index: 0 },
      { description: 'Task 2', completed: false, index: 1 },
      { description: 'Task 3', completed: false, index: 2 },
    ];
    localStorage.setItem('tasks', JSON.stringify(initialTasks));

    // Invoke the deleteTask function
    const indexToDelete = 1;
    deleteTask(indexToDelete, initialTasks);

    // Retrieve the updated tasks list from localStorage
    const updatedTasks = JSON.parse(localStorage.getItem('tasks'));

    // Assert that the task was successfully deleted
    expect(updatedTasks).toHaveLength(initialTasks.length - 1);
    expect(updatedTasks).not.toContainEqual(initialTasks[indexToDelete]);
    expect(updatedTasks[0]).toEqual(initialTasks[0]);
    expect(updatedTasks[1]).toEqual(initialTasks[2]);
  });
});
