import Tracks from './Helpers/Tracks';

const initialState = {
  index: 0,
  tracks: Tracks,
  isPlaying: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_TRACK':
      return {
        ...state,
        index: action.index,
        isPlaying: action.isPlaying,
      };
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.isPlaying,
      };

    default:
      return state;
  }
}
