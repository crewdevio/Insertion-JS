/*
  * @paramns { HTMLElement }
  ? Return { string || { tagName: String, attrs: virtualElementect, children: Array } }

*/

function transpiler(el) {

  if (el.nodeName === "#text") {
      // * return string value
      return el.nodeValue;
  }

  else {
    const virtualElement = { tagName: "", attrs: {}, children: [] };

    virtualElement.tagName = el.localName;

    // * insert attributes
    if (el.attributes) {
      const attrs = Array.prototype.slice.call(el.attributes);
      for (let attr of attrs) {
        virtualElement.attrs[attr.name] = attr.value;
      }
    }

    // * add all children
    el.childNodes.forEach((element) => {
      virtualElement.children.push(transpiler(element));
    });
    // * return object element
    return virtualElement;
  }
}

export default transpiler;
