function tasks(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      console.log(state, action);
      return;
    case 'CHANGE_DESCRIPTION':
      console.log(state, action);
      return;
    case 'CHANGE_PRIORITY':
      console.log(state, action);
      return;
    case 'CHANGE_STATE_AND_PRIORITY':
      console.log(state, action);
      return;
      
    case 'MOVE_TASK':
      const moveIndex = action.index;
      const newColumn = (action.column === 'do it') ? 'in progress' : 'done';
      return [
        ...state.slice(0, moveIndex),
        {...state[moveIndex], column: newColumn},
        ...state.slice(moveIndex + 1)
      ];
      
    case 'ABORT_TASK':
      const abortIndex = action.index;
      return [
        ...state.slice(0, abortIndex),
        {...state[abortIndex], column: 'aborted'},
        ...state.slice(abortIndex + 1)
      ];
      
    case 'DELETE_TASK':
      const deleteIndex = action.index;
      console.log('index: ' + deleteIndex);
      return [
        ...state.slice(0, deleteIndex),
        {...state[deleteIndex], column: 'deleted'},
        ...state.slice(deleteIndex + 1)
      ];
      
    default:
      return state;
  }
  return state;
}

export default tasks;
