const deleteList = require('../modules/delete');

// Mocking localStorage and window.location
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    })
  };
})();

const locationMock = {
  reload: jest.fn()
};

// Test the deleteList function
describe('deleteList', () => {
  beforeEach(() => {
    // Clear tasks in localStorage before each test
    localStorageMock.clear();
    jest.clearAllMocks();
    Object.defineProperty(global, 'localStorage', { value: localStorageMock });
    Object.defineProperty(global, 'location', { value: locationMock });
  });

  it('should delete a task with the given index and update the remaining task indices', () => {
    // Arrange
    const tasks = [
      { index: 1, description: 'Task 1' },
      { index: 2, description: 'Task 2' },
      { index: 3, description: 'Task 3' }
    ];
    localStorageMock.getItem.mockReturnValue(JSON.stringify(tasks));

    // Act
    deleteList(2, tasks);

    // Assert
    expect(localStorageMock.getItem).toHaveBeenCalledWith('tasks');
    expect(localStorageMock.getItem.mock.calls.length).toBe(1);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('tasks', JSON.stringify([
      { index: 1, description: 'Task 1' },
      { index: 2, description: 'Task 3' }
    ]));
    expect(locationMock.reload).toHaveBeenCalled();
  });
});
