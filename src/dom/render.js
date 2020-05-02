import { assingEvent, detectListeners } from "./utils/handleEvents.js";

import HanderError from '../errors/errorHandler.js';


function renderElem({ tagName, attrs = {}, children = [] }) {

  if (tagName === 'img' && !attrs['alt']){
      HanderError(new Error(), 'not fount alt attribute')
  }

  let $el = document.createElement(tagName);
  // * set attributes
  for (const [k, v] of Object.entries(attrs)) {
    if (detectListeners(k)) {
      $el = assingEvent($el, k, v);
    }
    if (!detectListeners(k)) {
      $el.setAttribute(k, v);
    }
  }
  // * set children
  for (const child of children) {
    const $child = render(child);
    $el.appendChild($child);
  }

  return $el;
}

const render = (vNode) => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }

  if (vNode.tagName === 'text'){
    return document.createTextNode(vNode.children)
  }

  return renderElem(vNode);
};

export default render;
