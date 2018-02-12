import Tracks from './Helpers/Tracks';

const initialState = {
  tracks: Tracks,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_TRACK':
      return {
        ...state,
        index: action.index,
      };
      
    case 'SET_TRACK_DURATION':
      return {
        ...state,
        duration: action.duration,
      };
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.currentTime,
      };

      default:
      return state;
  }
}