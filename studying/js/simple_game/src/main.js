import './main.scss';
import DOMDisplay from './js/DOMDisplay';
import runGame from './js/runGame';
import gameLevels from './js/gameLevels';

document.addEventListener('DOMContentLoaded', () => {
  // const simpleLevel = new Level(simpleLevelPlan);
  // const display = new DOMDisplay(document.body, simpleLevel);

  runGame(gameLevels, DOMDisplay);
});
