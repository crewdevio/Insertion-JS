/* @jsx insertionJsx */

import { insertionJsx, Fragment } from '../../../index.js';

function Switch({ children }) {

  return insertionJsx(
    Fragment,
    null,
    children
  );
}

export default Switch;