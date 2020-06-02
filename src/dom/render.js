/*
  * paramns virtualElement : { tagName: string, attrs: object, children: array }
  ? Return HTMLElement
*/

import { assingEvent, detectListeners } from "./utils/handleEvents.js";

import HanderError from "../errors/errorHandler.js";

function renderElem({ tagName, attrs = {}, children = [] }) {
  if (tagName === "img" && !attrs["alt"]) {
    HanderError(new Error(), "not fount alt attribute");
  }

  let Element = document.createElement(tagName);

  // * set attributes
  for (const [key, value] of Object.entries(attrs)) {
    if (detectListeners(key)) {
      Element = assingEvent(Element, key, value);
    }
    if (!detectListeners(key)) {
      Element.setAttribute(key, value);
    }
  }

  // * set children
  for (const child of children) {
    const $child = render(child);
    Element.appendChild($child);
  }

  return Element;
}

const render = (vNode) => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }

  return renderElem(vNode);
};

export default render;
