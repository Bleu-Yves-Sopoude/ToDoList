const addTask = require('../test/addTask');

describe('addTask', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add a new task to the tasks list', () => {
    const description = 'New Task';

    addTask(description);

    // Assert the task is added correctly
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([
      { description, completed: false, index: 1 },
    ]);
  });

  it('should add multiple tasks to the tasks list', () => {
    const descriptions = ['Task 1', 'Task 2', 'Task 3'];

    // Add multiple tasks
    descriptions.forEach((description, index) => {
      addTask(description);

      // Assert each task is added correctly
      expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([
        ...Array(index).fill().map((_, i) => ({
          description: `Task ${i + 1}`,
          completed: false,
          index: i + 1,
        })),
        { description, completed: false, index: index + 1 },
      ]);
    });

    // Assert the final tasks list
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual(
      descriptions.map((description, index) => ({
        description,
        completed: false,
        index: index + 1,
      }))
    );
  });
});
