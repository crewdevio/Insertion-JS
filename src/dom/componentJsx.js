const emptyTags = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

// escape an attribute
let esc = (str) => String(str).replace(/[&<>"']/g, (s) => `&${map[s]};`);
let map = {
  "&": "amp",
  "<": "lt",
  ">": "gt",
  '"': "quot",
  "'": "apos",
};
let setInnerHTMLAttr = "is a empty tag not innerHTML";
let DOMAttributeNames = {
  className: "class",
  htmlFor: "for",
};

let sanitized = {};

function insertionJsx(tagName, attrs) {
  let stack = [];
  let hyper = "";
  attrs = attrs || {};
  for (let index = arguments.length; index-- > 2; ) {
    stack.push(arguments[index]);
  }

  if (typeof tagName === "function") {
    attrs.children = stack.reverse();
    return tagName(attrs);
  }

  if (tagName) {
    hyper += "<" + tagName;
    if (attrs)
      for (let key in attrs) {
        if (
          attrs[key] !== false &&
          attrs[key] != null &&
          key !== setInnerHTMLAttr
        ) {
          hyper += ` ${
            DOMAttributeNames[key] ? DOMAttributeNames[key] : esc(key)
          }="${esc(attrs[key])}"`;
        }
      }
    hyper += ">";
  }

  if (emptyTags.indexOf(tagName) === -1) {
    if (attrs[setInnerHTMLAttr]) {
      hyper += attrs[setInnerHTMLAttr].__html;
    } else {
      while (stack.length) {
        let child = stack.pop();
        if (child) {
          if (child.pop) {
            for (let index = child.length; index--; ) stack.push(child[index]);
          } else {
            hyper += sanitized[child] === true ? child : esc(child);
          }
        }
      }
    }
    hyper += tagName ? `</${tagName}>` : "";
  }
  sanitized[hyper] = true;

  return hyper;
}

export default insertionJsx;
