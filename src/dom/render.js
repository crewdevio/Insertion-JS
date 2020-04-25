import { assingEvent, detectListeners } from "./utils/handleEvents.js";

function renderElem({ tagName, attrs, children }) {
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

function render(vNode) {
  // * if type is string return textNode

  if (vNode.tagName === "text") {
    return document.createTextNode(vNode.children);
  }
  // * else return element
  return renderElem(vNode);
}

export default render;
