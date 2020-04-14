function mount($node, $target = false) {

  if ($target) {
    document.querySelector($target).replaceWith($node);
  }

  else {
    document.querySelector('#root').replaceWith($node);
  }

  return $node;

};

export default mount;