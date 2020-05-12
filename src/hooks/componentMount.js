function DidMount(callBack = () => {}) {
  setTimeout(() => {
    callBack();
  }, 1000);
}

export default DidMount;
