const { clearCompletedTasks } = require('./clearAll.js');

describe('clearCompletedTasks', () => {
  test('clears completed tasks and calls saveTasks', () => {
    // Define the necessary variables for the test case
    const mockSaveTasks = jest.fn();
    const tasks = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: true },
      { description: 'Task 3', completed: true },
    ];
    // Call the function to be tested
    clearCompletedTasks(tasks, mockSaveTasks);
    // Make assertions to check the expected behavior
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Task 1');
    expect(mockSaveTasks).toHaveBeenCalled();
  });
});


