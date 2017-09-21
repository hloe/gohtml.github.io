// add task
export function addTask(description, priority) {
  return {
    type: 'ADD_TASK',
    description,
    priority
  };
}

// change priority
export function changePriority(index, priority) {
  return {
    type: 'CHANGE_PRIORITY',
    index,
    priority
  };
}

// change state and priority
export function changeDescriptionAndPriority(index, description, priority) {
  return {
    type: 'CHANGE_DESCRIPTION_AND_PRIORITY',
    index,
    description,
    priority
  };
}

// move task
export function moveTask(index, column) {
  return {
    type: 'MOVE_TASK',
    index,
    column
  }
}

// abort task
export function abortTask(index) {
  return {
    type: 'ABORT_TASK',
    index
  };
}

// delete task
export function deleteTask(index) {
  return {
    type: 'DELETE_TASK',
    index
  };
}