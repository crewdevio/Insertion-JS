function transpiler(el) {
  const obj = { tagName: "", attrs: {}, children: [] };

  if (el.nodeName === "#text") {
    obj.children.push(el.nodeValue);
  }
  // * remove # in tagName #text
  obj.tagName = el.localName ? el.localName : el.nodeName.replace("#", "");
  // * insert attributes
  if (el.attributes) {
    const attrs = Array.prototype.slice.call(el.attributes);
    for (let attr of attrs) {
      obj.attrs[attr.name] = attr.value;
    }
  }

  // * add children
  el.childNodes.forEach((element) => {
    obj.children.push(transpiler(element));
  });

  const { tagName, attrs, children } = obj;

  return {
    tagName,
    attrs,
    children,
  };
}

export default transpiler;
