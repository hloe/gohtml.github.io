export function setTrack(index) {
  return {
    type: 'SET_TRACK',
    index,
    isPlaying: true,
  };
}

export function setIsPlaying(isPlaying) {
  return {
    type: 'SET_IS_PLAYING',
    isPlaying,
  };
}
