import { insertionJsx } from '../../index.js';

function Link({ to, className, children }) {
  return insertionJsx(
    "a",
    { href: `#${to}`, class: className },
    children.join("")
  );
}

export default Link;
