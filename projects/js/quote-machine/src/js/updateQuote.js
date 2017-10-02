import getQuote from './getQuote';

const updateQuote = () => {
  const {quote, author} = getQuote();
  
  const quoteText = document.getElementsByClassName('quote-text')[0];
  const quoteAuthor = document.getElementsByClassName('quote-author')[0];
  
  quoteText.innerHTML = quote;
  quoteAuthor.innerHTML = '&mdash; ' + author;
    
  const tweet = `${quote}
  ${author}`;
  
  const tweetBtn = document.getElementsByClassName('tweet-btn')[0];
  tweetBtn.setAttribute(
    'href', 
    `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${tweet}`
  );
}

export default updateQuote;