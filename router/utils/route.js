import { insertionJsx, createElement } from "../../../index.js";
import HandlerError from "../../src/errors/errorHandler.js";

function Route({
  component,
  path,
  children,
  componentsProps = false,
  exact = false,
}) {
  const childs = children.map((child) => {
    return child;
  });

  if (typeof component === "function") {
    component = insertionJsx(component, componentsProps, null);
  }

  component = [component][0] && true ? [component] : [];

  const elements = [];

  if (!children.length && component.length) elements.push(...component);

  if (children.length && !component.length) elements.push(...childs);

  if (!children.length && !component.length)
    HandlerError(
      new Error("Route Component without Component child"),
      "add Component child in router",
      true
    );

  return { path, component: createElement(elements.join("")) }
}

export default Route;
