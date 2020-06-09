export interface InsertionElement {
  tagName: string;
  attrs: object | any;
  children: Array<InsertionElement> | string | InsertionElement;
}

export interface ISwitch {
  routes: Array<InsertionElement>;
  children: Array<string>;
}

export interface InsertionRouter {
  path: string;
  component: InsertionElement;
}

export interface RouteProps {
  path: string;
  exact?: boolean;
  component?: Function | void | string | Array<InsertionElement>;
  componentsProps?: any | Object;
  children?: Array<string> | string | void;
}

export type LinkAttrs = {
  hreflang?: string;
  media?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: string;
  type?: string;
  download?: string;
};

export interface LinkProps {
  to: string;
  attributes?: LinkAttrs;
}

declare function Link({ to, attributes }: LinkProps): InsertionElement;
declare function Switch(): ISwitch;
declare function Route({
  path,
  exact,
  component,
  componentsProps,
  children,
}: RouteProps): InsertionRouter;
declare function Router(): void;

declare function Redirect({ to: string }): void;

export { Route, Link, Switch, Router, Redirect };
