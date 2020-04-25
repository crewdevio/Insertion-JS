/* @jsx insertionJsx */

import insertionJsx from "../dom/componentJsx.js";

function Fragment({ id, className, nameComponent, children }) {
  if (id || className || nameComponent) {
    return insertionJsx(
      "div",
      {
        id: id,
        className: className,
        nameComponent: nameComponent,
      },
      children
    );
  } else {
    return insertionJsx("div", null, children);
  }
}

export default Fragment;
