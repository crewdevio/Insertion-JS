import StoreRoutes from "./core.js";
import { createElement, render, ErrorHandler } from "../../index.js";

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

  if (children[0].children) {
    createElement(children[0].children.join("")).children.forEach((el) => {
      document.querySelector("body").prepend(render(el));
    });
  }
}

export default Router;
