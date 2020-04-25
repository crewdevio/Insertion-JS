function State(initialState = {}) {
  const state = {
    init: initialState,

    callback: function (newState) {
      this.init = newState;
    },
    get: function () {
      return this.init;
    },
  };

  Object.freeze(state);

  return [state.get(), state.callback];
}

export default State;
