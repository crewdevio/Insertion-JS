/*
  * define all types

*/
interface InsertionElement {
  tagName: string;
  attrs: object | any;
  children: Array<InsertionElement> | string | InsertionElement;
}
// * dom elements functions
declare function Fragment (): string;
declare function insertionJsx(tagName: Function, attrs: object | any): string;
declare function createElement(node: string, target?: string | boolean): InsertionElement;
declare function render(vNode: InsertionElement): HTMLElement;
declare function mount(node: HTMLElement, target?: string | boolean): HTMLElement;
declare function diff(oldNode: InsertionElement, newNode: InsertionElement): Function;
declare function DidMount(callback: Function): void | any;

declare class Store {
  public get state(): any;

  public setState(state: any): void;

  public addListener(Callback: Function): void;

  private notify(): void;

  public initState(state): void;

  private exec(callbacks): void;

  public BeforeUpdate(callback: Function): void;

  public removeListener(listener: Function): void;
}

export {
  insertionJsx,
  createElement,
  render,
  mount,
  diff,
  DidMount,
  Fragment,
  Store,
};
