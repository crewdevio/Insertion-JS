import StoreRoutes from "./core.js";
import ErrorHandler from "../../src/errors/errorHandler.js";
import { createElement, render } from "../../index.js";

function Router({ children }) {
  children.forEach((element) => {
    if (typeof element === "string")
      ErrorHandler(
        new Error("Missing Switch Route Component"),
        "Add Switch route component",
        true
      );
  });
  if (children[0].routes) StoreRoutes(children[0].routes);

  if (children[0].children)
    document
      .querySelector("#root")
      .prepend(render(createElement(children[0].children.join(""))));
}

export default Router;
