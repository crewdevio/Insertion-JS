interface InsertionElement {
  tagName: string;
  attrs: object | any;
  children: Array<InsertionElement> | string | InsertionElement;
}

interface ISwitch {
  routes: Array<InsertionElement>;
  children: Array<string>;
}

interface InsertionRouter {
  path: string;
  component: InsertionElement;
}

interface RouteProps {
  path: string;
  exact?: boolean;
  component?: Function | void | string | Array<InsertionElement>;
  componentsProps?: any | Object;
  children?: Array<string> | string | void;
}

type LinkAttrs = {
  hreflang?: string;
  media?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: string;
  type?: string;
  download?: string;
};

interface LinkProps {
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
