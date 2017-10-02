import data from './data.js';
import createNode from './createNode';
import getQuote from './getQuote';
import updateQuote from './updateQuote';

const createQuoteBox = () => {
  const quoteBox = createNode('div', {class: 'quote-container'});
  const quoteText = createNode('p', {class: 'quote-text'});
  const quoteAuthor = createNode('p', {class: 'quote-author'});
  
  quoteBox.appendChild(quoteText);
  quoteBox.appendChild(quoteAuthor);

  return quoteBox;
}

const createButtonsBox = () => {
  const buttonsBox = createNode('div', {class: 'buttons-container'});
  const tweetButton = createNode('a', {class: 'tweet-btn', target: '_blank', title: 'Tweet this quote!'}, 'Tweet this quote!');
  const newQuoteButton = createNode('button', {class: ''}, 'New quote');
  
  newQuoteButton.addEventListener('click', updateQuote);
  
  buttonsBox.appendChild(tweetButton);
  buttonsBox.appendChild(newQuoteButton);
  
  return buttonsBox;
}

const createContainer = () => {
  
  const container = createNode('div', {class: 'container'});
  
  container.appendChild(createQuoteBox());
  container.appendChild(createButtonsBox());
  
  return container;  
}

const createAuthor = () => {
  const authorLink = createNode(
    'a', 
    {
      class: '', 
      target: '_blank', 
      href: 'https://github.com/hloe/hloe.github.io',
      title: 'hloe'
    },
    'by hloe'
  );
  
  const author = createNode('p', {class: ''});
  author.appendChild(authorLink);
  
  return author;
}
                            
const buildLayout = () => {
  const main = createNode('div', {class: ''});
  main.appendChild(createContainer());
  main.appendChild(createAuthor());
  
  return main;
}

export default buildLayout;