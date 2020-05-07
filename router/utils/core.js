import { render } from "../../index.js";
import ErrorHandler from "../../src/errors/errorHandler.js";

// Routes
function StoreRoutes(routes) {
  const paths = routes.map((route) => {
    if (route.path !== "") {
      return route.path;
    }
  });

  const parseLocation = (hash) => hash.slice(1).toLowerCase();

  const findComponentByPath = (path) =>
    routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) || false;

  // function router() {
  const path = parseLocation(document.location.hash);
  const { component } = findComponentByPath(path, routes); // ! {};

  let hash = window.location.hash.replace("#", "");

  if (!window.location.href.includes("#/")) {
    window.location.hash = "#/"; //  ? add rootPath #/
  }

  if (!paths.includes("/"))
    ErrorHandler(
      new Error("Missing root route path"),
      "Add root route path",
      true
    );

  if (!paths.includes(hash)) {
    // ? if not exist the path launch default component
    routes.forEach((route) => {
      if (route.path === "*") {
        document.querySelector("#root").replaceWith(render(route.component));
      }
    });
  }

  if (component) {
    //  TODO add manager to mount elements into root endPoint
    document.querySelector("#root").replaceWith(render(component));
  }
  // }
}

// window.addEventListener("hashchange", router); // TODO manager to load and change hash event
// window.addEventListener("load", router);

export default StoreRoutes;
