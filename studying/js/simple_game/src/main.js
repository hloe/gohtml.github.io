import './main.scss';
import CanvasDisplay from './js/CanvasDisplay';
import runGame from './js/runGame';
import gameLevels from './js/gameLevels';

document.addEventListener('DOMContentLoaded', () => {
  runGame(gameLevels, CanvasDisplay);
});
