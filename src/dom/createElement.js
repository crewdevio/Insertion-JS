import transpiler from "./transpiler.js";

function createElement(node, target = false) {
  // * create div to mount the component  vujm,
  const mount = document.createElement("div");

  if (target) {
    mount.setAttribute("id", target);
  } else {
    mount.setAttribute("id", "root");
  }

  mount.innerHTML = node;

  // * return obj like { tagName, attrs, children }
  return transpiler(mount);
}

export default createElement;