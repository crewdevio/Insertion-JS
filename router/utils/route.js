/* @jsx insertionJsx */

import { Fragment, insertionJsx } from "../../../index.js";
import Add from "./controller.js";

function Route({ component, path, children }) {

  Add(path, insertionJsx(
    Fragment,
    null,
    component ? component : children
  ));
}

export default Route;