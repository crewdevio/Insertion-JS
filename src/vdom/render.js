function renderElem ({ tagName, attrs, children }) {
  const $el = document.createElement(tagName);
  // set attributes
  for (const [k, v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  }
  // set children
  for (const child of children) {
    const $child = render(child);
    $el.appendChild($child);
  }

  return $el;
};

function render(vNode){
  if (vNode.tagName === 'text') {
      return document.createTextNode(vNode.children);
  }
  return renderElem(vNode);
};

export default render;