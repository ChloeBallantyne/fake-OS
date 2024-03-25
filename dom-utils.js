const createElementWithText = (elType, text, parentNode) => {
  const newEl = document.createElement(elType);
  const elText = document.createTextNode(text);
  newEl.appendChild(elText);
  parentNode.appendChild(newEl);
};
export default createElementWithText;
