function DidMount(callBack = () => {}) {
  setTimeout(() => {
    callBack();
  }, 1);
}

export default DidMount;
