class Store {
  constructor() {
    this.Listener = [];
    this._state = null;
    this.set = false;
    this._before = [];
  }
  get state() {
    return this._state;
  }
  setState(state) {
    if (this.set) {
      this.exec(this._before);
      this._state = state;
      this.notify();
    } else {
      throw new Error("init state before");
    }
  }
  addListener(Callback) {
    this.Listener.push(Callback);
  }
  notify() {
    this.Listener.forEach((callback) => {
      callback(this._state);
    });
  }
  initState(state) {
    this._state = state;
    this.set = true;
  }
  exec(callbacks) {
    callbacks.forEach((callback) => {
      callback(this._state);
    });
  }
  BeforeUpdate(callback) {
    this._before.push(callback);
  }
  removeListener(listener) {
    const index = this.Listener.indexOf(listener);
    this.Listener = this.Listener.splice(index, 0);
    return index;
  }
}
export default Store;
