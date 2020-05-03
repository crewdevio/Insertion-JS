/* @jsx insertionJsx */

import { insertionJsx } from '../../../index.js';

function Link({ to, children }){

  return <a href={`#${to}`}>{children}</a>
}


export default Link;