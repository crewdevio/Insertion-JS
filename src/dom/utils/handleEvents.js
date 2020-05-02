/*

  * events handler

*/

import ErrorHandler from "../../errors/errorHandler.js";

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
  "keyenter",
  "keyesc",
  "keyspace",
  "keyalt",
  "keyctrl",
  "keyback",
];

const specialEvents = [
  "keyenter",
  "keyesc",
  "keyspace",
  "keyalt",
  "keyctrl",
  "keyback",
];

const otherEvents = [
  { key: "keyenter", code: 13 },
  { key: "keyesc", code: 27 },
  { key: "keyspace", code: 32 },
  { key: "keyalt", code: 18 },
  { key: "keyctrl", code: 17 },
  { key: "keyback", code: 8 },
];

function assingEvent(element, key, value) {
  const indexEvent = HandleEvent.indexOf(key);
  const callback = eval(value);;

  if (specialEvents.includes(key)) {
    for (const event of otherEvents) {
      if (event.key === key) {
        element.addEventListener("keyup", (e) => {
          if (e.keyCode === event.code) {
            try {
              callback(e);
            } catch (error) {
              const messageError = "only use arrow function in DOM events";
              ErrorHandler(error, messageError);
            }
          }
        });
      }
    }
  }


  if (!specialEvents.includes(key)) {
    element.addEventListener(HandleEvent[indexEvent], callback);
  }

  return element;
}

function detectListeners(key) {
  return HandleEvent.includes(key);
}

export { assingEvent, detectListeners };
