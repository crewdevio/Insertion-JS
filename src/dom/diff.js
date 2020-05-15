import render from "./render.js";
const zip = (xs, ys) => {
  const zipped = [];
  for (let index = 0; index < Math.max(xs.length, ys.length); index++) {
    zipped.push([xs[index], ys[index]]);
  }
  return zipped;
};

const diffAttrs = (oldAttrs, newAttrs) => {
  const patches = [];

  // * set new attributes
  for (const [key, value] of Object.entries(newAttrs)) {
    patches.push((virtualNode) => {
      virtualNode.setAttribute(key, value);
      return virtualNode;
    });
  }

  // * remove old attributes
  for (const attr in oldAttrs) {
    if (!(attr in newAttrs)) {
      patches.push((virtualNode) => {
        virtualNode.removeAttribute(attr);
        return virtualNode;
      });
    }
  }

  return (virtualNode) => {
    for (const patch of patches) {
      patch(virtualNode);
    }
  };
};

const diffChildren = (oldVChildren, newVChildren) => {
  const childPatches = [];
  oldVChildren.forEach((oldVChild, index) => {
    childPatches.push(diff(oldVChild, newVChildren[index]));
  });

  const additionalPatches = [];
  for (const additionalVChild of newVChildren.slice(oldVChildren.length)) {
    additionalPatches.push((virtualNode) => {
      virtualNode.appendChild(render(additionalVChild));
      return virtualNode;
    });
  }

  return (virtualParents) => {
    for (const [patch, child] of zip(childPatches, virtualParents.childNodes)) {
      patch(child);
    }

    for (const patch of additionalPatches) {
      patch(virtualParents);
    }

    return virtualParents;
  };
};

const diff = (vOldNode, vNewNode) => {
  if (vNewNode === undefined) {
    return (virtualNode) => {
      virtualNode.remove();
      return undefined;
    };
  }

  if (typeof vOldNode === "string" || typeof vNewNode === "string") {
    if (vOldNode !== vNewNode) {
      return (virtualNode) => {
        const $newNode = render(vNewNode);
        virtualNode.replaceWith($newNode);
        return $newNode;
      };
    } else {
      return (virtualNode) => undefined;
    }
  }

  if (vOldNode.tagName !== vNewNode.tagName) {
    return (virtualNode) => {
      const $newNode = render(vNewNode);
      virtualNode.replaceWith($newNode);
      return $newNode;
    };
  }

  const patchAttrs = diffAttrs(vOldNode.attrs, vNewNode.attrs);
  const patchChildren = diffChildren(vOldNode.children, vNewNode.children);

  return (NodeElement) => {
    patchAttrs(NodeElement);
    patchChildren(NodeElement);
    return NodeElement;
  };
};

export default diff;
