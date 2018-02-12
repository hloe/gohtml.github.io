export function setTrack(index) {
  return {
    type: 'SET_TRACK',
    index,
  };  
}

export function setTrackDuration(duration) {
  return {
    type: 'SET_TRACK_DURATION',
    duration,
  };
}

export function setCurrentTime(currentTime) {
  return {
    type: 'SET_CURRENT_TIME',
    currentTime,
  };
}