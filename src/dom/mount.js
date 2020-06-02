/*

  ? @param { HTMLNode, DomElemnt }

*/

function mount($node, $target = false) {
  // * default false

  if ($target) {
    document.querySelector($target).replaceWith($node);
  } else {
    document.querySelector("#root").replaceWith($node);
  }

  // * return build Dom element
  return $node;
}

export default mount;
