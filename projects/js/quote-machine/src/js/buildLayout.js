import createNode from './createNode';
import updateQuote from './updateQuote';

const createQuoteBox = () => {
  const quoteBox = createNode('div', { class: 'quote-container' });
  const quoteText = createNode('q', { class: 'quote-text' });
  const quoteAuthor = createNode('p', { class: 'quote-author' });

  quoteBox.appendChild(quoteText);
  quoteBox.appendChild(quoteAuthor);

  return quoteBox;
};

const createButtonsBox = () => {
  const buttonsBox = createNode('div', { class: 'buttons-container' });
  const tweetButton = createNode(
    'a',
    {
      class: 'tweet-btn',
      target: '_blank',
      title: 'Tweet this quote!',
    },
  );

  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512"><path d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zm-58.65 186.15c-2.55 117.3-76.5 198.9-188.7 204-45.9 2.55-79.05-12.75-109.65-30.6 33.15 5.1 76.5-7.65 99.45-28.05-33.15-2.55-53.55-20.4-63.75-48.45 10.2 2.55 20.4 0 28.05 0-30.6-10.2-51-28.05-53.55-68.85 7.65 5.1 17.85 7.65 28.05 7.65-22.95-12.75-38.25-61.2-20.4-91.8 33.15 35.7 73.95 66.3 140.25 71.4-17.85-71.4 79.05-109.65 117.3-61.2 17.85-2.55 30.6-10.2 43.35-15.3-5.1 17.85-15.3 28.05-28.05 38.25 12.75-2.55 25.5-5.1 35.7-10.2-2.55 12.75-15.3 22.95-28.05 33.15z" /></svg>';

  const tweetSvg = createNode('svg', { class: 'tweet-svg' });
  tweetSvg.innerHTML = svg;
  tweetButton.appendChild(tweetSvg);

  const newQuoteButton = createNode('button', { class: 'new-btn' }, 'New quote');

  newQuoteButton.addEventListener('click', updateQuote);

  buttonsBox.appendChild(tweetButton);
  buttonsBox.appendChild(newQuoteButton);

  return buttonsBox;
};

const createContainer = () => {
  const container = createNode('div', { class: 'box-container' });

  container.appendChild(createQuoteBox());
  container.appendChild(createButtonsBox());

  return container;
};

const createAuthor = () => {
  const authorLink = createNode(
    'a',
    {
      class: 'hloe-link',
      target: '_blank',
      href: 'https://github.com/hloe/hloe.github.io',
      title: 'hloe',
    },
    'by hloe',
  );

  const author = createNode('p', { class: 'hloe' });
  author.appendChild(authorLink);

  return author;
};

const buildLayout = () => {
  const main = createNode('div', { class: 'container' });
  main.appendChild(createContainer());
  main.appendChild(createAuthor());

  return main;
};

export default buildLayout;
