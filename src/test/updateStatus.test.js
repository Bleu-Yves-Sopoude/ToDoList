// Path: src/test/updateStatus.test.js
import { updateTaskStatus } from "./updateStatus.js";

describe("updateTaskStatus", () => {
  test("updates task status and calls saveTasks", () => {
    const index = 1;
    const completed = true;

    const mockSaveTasks = jest.fn();

    const tasks = [
      { description: 'Task 1' },
      { description: 'Task 2' },
      { description: 'Task 3' },
    ];

    updateTaskStatus(index, completed, tasks, mockSaveTasks);

    expect(tasks[index].completed).toBe(completed);
    expect(mockSaveTasks).toHaveBeenCalled();
  });
});
