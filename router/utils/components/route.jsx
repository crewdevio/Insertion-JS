/* @jsx insertionJsx */

import { Fragment, insertionJsx } from "../../../index.js";
import Add from "./controller.js";

function Route({ component, path, children }) {

  Add(path, <Fragment>{component ? component : children}</Fragment>);
}


export default Route;