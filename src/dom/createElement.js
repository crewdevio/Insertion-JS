/*
  * @paramns { node: string, target?: string }
*/


import transpiler from "./transpiler.js";

function createElement(node, target = false) {
  // * create div to mount the component
  const mount = document.createElement("div");

  // * set id to root div
  if (target) {
    mount.setAttribute("id", target);
  } else {
    mount.setAttribute("id", "root");
  }

  mount.innerHTML = node;

  // * return virtualElement  { tagName, attrs, children }
  return transpiler(mount);
}

export default createElement;