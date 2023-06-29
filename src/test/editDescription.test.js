// Import the function to be tested
const { editTaskDescription } = require('./editDescription');

// Define the describe block
describe('editTaskDescription', () => {
  test('updates task description and calls saveTasks', () => {
    // Define the necessary variables for the test case
    const index = 1;
    const description = 'new description';

    // Create a mock for the saveTasks function
    const mockSaveTasks = jest.fn();

    // Define the tasks array
    const tasks = [
      { description: 'Task 1' },
      { description: 'Task 2' },
      { description: 'Task 3' }
    ];

    // Call the function to be tested
    editTaskDescription(index, description, tasks, mockSaveTasks);

    // Make assertions to check the expected behavior
    expect(tasks[index].description).toBe(description);
    expect(mockSaveTasks).toHaveBeenCalled();
  });
});
