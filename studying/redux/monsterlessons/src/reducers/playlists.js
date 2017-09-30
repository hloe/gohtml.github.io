const initialState = [];

export default function playlists(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return state;
    case 'DELETE_PLAYLIST':
      return state;
    default:
      return state;
  }
  return state;
}