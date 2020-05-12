import { insertionJsx,  createElement, ErrorHandler } from "../../index.js";

function Route({ component, path, children, componentsProps, exact, redirect}) {
  const childs = children.map((child) => {
      return child;
  });

  if (typeof component === "function")
      component = insertionJsx(
        component,
        componentsProps ? componentsProps : {},
        null
      );

  component = [component][0] && true ? [component] : [];

  const elements = [];

  if (!children.length && component.length) elements.push(...component);

  if (children.length && !component.length) elements.push(...childs);

  if (!children.length && !component.length)
    ErrorHandler(
      new Error("Route Component without Component child"),
      "add Component child in router",
      true
    );

  if (path === "/") {
    return {
      path,
      component: createElement(elements.join("")),
      exact: exact ? exact : false,
      redirect: redirect ? redirect : false,
    };
  } else {
      return {
        path,
        component: createElement(elements.join("")),
        redirect: redirect ? redirect : false,
      };
  }
}

export default Route;
