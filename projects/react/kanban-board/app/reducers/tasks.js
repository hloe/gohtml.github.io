function saveInLocalStorage(arr) {  
  localStorage.setItem('tasks', JSON.stringify(arr));
}

function tasks(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      const addResult = [
        ...state.slice(0, state.length),
        {
          description: action.description,
          date: new Date().toISOString(),
          priority: action.priority,
          column: 'do it',
          index: state.length
        }
      ];
      saveInLocalStorage(addResult);
      return addResult;
      
    case 'CHANGE_PRIORITY':
      const priorityIndex = action.index;
      const priorityResult = [
        ...state.slice(0, priorityIndex),
        {...state[priorityIndex], priority: action.priority},
        ...state.slice(priorityIndex + 1)
      ];
      saveInLocalStorage(priorityResult);
      return priorityResult;
      
    case 'CHANGE_DESCRIPTION_AND_PRIORITY':
      const changeIndex = action.index;
      const changeAllResult = [
        ...state.slice(0, changeIndex),
        {...state[changeIndex], priority: action.priority, description: action.description},
        ...state.slice(changeIndex + 1)
      ];
      saveInLocalStorage(changeAllResult);
      return changeAllResult;
      
    case 'MOVE_TASK':
      const moveIndex = action.index;
      const newColumn = (action.column === 'do it') ? 'in progress' : 'done';
      const moveResult = [
        ...state.slice(0, moveIndex),
        {...state[moveIndex], column: newColumn},
        ...state.slice(moveIndex + 1)
      ];
      saveInLocalStorage(moveResult);
      return moveResult;
      
    case 'ABORT_TASK':
      const abortIndex = action.index;
      const abortResult = [
        ...state.slice(0, abortIndex),
        {...state[abortIndex], column: 'aborted'},
        ...state.slice(abortIndex + 1)
      ];
      saveInLocalStorage(abortResult);
      return abortResult;
      
    case 'DELETE_TASK':
      const deleteIndex = action.index;
      const deleteResult = [
        ...state.slice(0, deleteIndex),
        {...state[deleteIndex], column: 'deleted'},
        ...state.slice(deleteIndex + 1)
      ];
      saveInLocalStorage(deleteResult);
      return deleteResult;
      
    default:
      return state;
  }
  return state;
}

export default tasks;
