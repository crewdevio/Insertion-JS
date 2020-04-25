import DidMount from "../hooks/componentMount.js";

function mount($node, $target = false) {
  if ($target) {
    document.querySelector($target).replaceWith($node);
  } else {
    document.querySelector("#root").replaceWith($node);
  }
  DidMount();
  return $node;
}

export default mount;
