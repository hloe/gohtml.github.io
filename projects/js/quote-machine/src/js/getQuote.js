import data from './data';

const getQuote = () => {
  const min = 0;
  const max = data.length - 1;
  const index = min + Math.floor(Math.random() * ((max + 1) - min));

  return data[index];
};

export default getQuote;
