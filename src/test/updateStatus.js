const updateStatus = (index, completed) => {
    tasks[index].completed = completed;
    storeTasksToLocalStorage();
  };
  
  export default updateStatus;