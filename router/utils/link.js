/* @jsx insertionJsx */

import { insertionJsx } from '../../../index.js';

function Link({ to, children }) {

  return insertionJsx(
    'a',
    { href: `#${to}` },
    children
  );
}

export default Link;