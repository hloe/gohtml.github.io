const createNode = (type, attributes, text) => {
  const el = document.createElement(type);

  if (attributes && (typeof attributes === 'object')) {
    Object.keys(attributes).forEach((key) => {
      el.setAttribute(key, attributes[key]);
    });
  }

  if (text && (typeof text === 'string')) {
    el.appendChild(document.createTextNode(text));
  }

  return el;
};

export default createNode;
