import './main.scss';
import buildLayout from './js/buildLayout';
import updateQuote from './js/updateQuote';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  root.appendChild(buildLayout());

  updateQuote();
});
