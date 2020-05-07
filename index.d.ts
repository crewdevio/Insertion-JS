/*
  * define all types

*/

export interface InsertionElement {
    tagName: string
    attrs: object | any
    children: Array <InsertionElement> | string | InsertionElement
}
// * dom elements functions
declare  const Fragment: string;
declare function insertionJsx(tagName: Function, attrs: object | any): string;
declare function createElement(node: string, target?: string | boolean): InsertionElement;
declare function transpiler(el: HTMLElement): InsertionElement;
declare function renderElem(obj: InsertionElement): HTMLElement;
declare function render(vNode: string | InsertionElement): HTMLElement;
declare function mount(node: HTMLElement, target?: string | boolean): HTMLElement;
declare function diff(oldNode: InsertionElement, newNode: InsertionElement): Function;
declare function DidMount(callback: Function): void | any;
declare function assingEvent(element: HTMLElement, key: any, value: any): HTMLElement;
declare function detectListeners(key: string): boolean;
