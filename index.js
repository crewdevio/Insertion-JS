/* insertion js version 0.1.0 MIT lisence Crew-Dev */

import Fragment from "./src/components/fragment.js";
import insertionJsx from "./src/dom/ComponentCore.js";
import createElement from "./src/dom/createElement.js";
import diff from "./src/dom/diff.js";
import mount from "./src/dom/mount.js";
import render from "./src/dom/render.js";
import DidMount from "./src/hooks/componentMount.js";
import ErrorHandler from "./src/errors/errorHandler.js";
import Store from "./src/hooks/store.js";

export default insertionJsx;

export {
  insertionJsx,
  ErrorHandler,
  createElement,
  diff,
  mount,
  render,
  Fragment,
  Store,
  DidMount,
};
