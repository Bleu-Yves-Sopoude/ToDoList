// A function to iterate over the tasks array and populate an HTML list item element for each task
const populateHtmlForEachTask = (tasks) => {
  const toDoListBox = document.querySelector('.to-do-list-box');
  const taskBox = [];
  for (let i = 0; i < tasks.length; i += 1) {
    taskBox[i] = document.createElement('div');
    taskBox[i].classList.add('flex-row', 'task-box');
    for (let j = i; j < tasks.length; j += 1) {
      if (tasks[j].index < tasks[i].index) {
        // variables swapped in one destructuring assignment
        [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
      }
    }
    if (tasks[i].description !== '' && !tasks[i].completed) {
      /* d prefix is used below in front of ${tasks[i].index}
      to avoid using number as tag class or id */
      taskBox[i].innerHTML = `<div class = "checkBox-and-description-box flex-row">
                                  <input class = " checkBox${tasks[i].index} check-box" type = "checkBox">
                                  <p class = "d${tasks[i].index} task-description">${tasks[i].description}</p>
                                </div>
                                <div class = "d${tasks[i].index} show-dots dots-box flex-column"><span class = "dot"></span><span class = "dot"></span><span class = "dot"></span></div>
                                <i class="d${tasks[i].index}  fa-regular fa-pen-to-square edit"></i>
                                <i id = "d${tasks[i].index}" class="fa-regular fa-trash-can trash"></i>
                                `;
      toDoListBox.appendChild(taskBox[i]);
    } else if (tasks[i].description !== '' && tasks[i].completed) {
      taskBox[i].innerHTML = `<div class = "checkBox-and-description-box flex-row">
                                  <input class = " checkBox${tasks[i].index} check-box" type = "checkBox" checked = "checked">
                                  <p class = "d${tasks[i].index} task-description">${tasks[i].description}</p>
                                </div>
                                <div class = "d${tasks[i].index} show-dots dots-box flex-column"><span class = "dot"></span><span class = "dot"></span><span class = "dot"></span></div>
                                <i class="d${tasks[i].index}  fa-regular fa-pen-to-square edit"></i>
                                <i id = "d${tasks[i].index}" class="fa-regular fa-trash-can trash"></i>
                                `;
      toDoListBox.appendChild(taskBox[i]);
      // Keep line through for completed task
      document.querySelector(`p.d${tasks[i].index}`).style.textDecoration = 'line-through';
    }
    // Set the task description paragraph content to editable for each task
    document.querySelector(`.d${tasks[i].index}`).contentEditable = true;
  }
};
export default populateHtmlForEachTask;
