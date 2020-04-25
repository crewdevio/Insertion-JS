/*

  * mouse event handler

*/

const HandleEvent = [
  "click",
  "focus",
  "change",
  "keyup",
  "keydown",
  "keypress",
  "copy",
  "cut",
  "paste",
  "mouseover",
  "mousemove",
  "mouseleave",
  "mouseout",
  "mouseenter",
  "load",
];

function assingEvent(element, key, value) {
  const indexEvent = HandleEvent.indexOf(key);
  const callback = eval(value);
  element.addEventListener(HandleEvent[indexEvent], callback);

  return element;
}

function detectListeners(key) {
  return HandleEvent.includes(key);
}

export { assingEvent, detectListeners };
