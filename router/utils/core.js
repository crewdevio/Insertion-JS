import { render, ErrorHandler, mount } from "../../index.js";

// * manage all routes
function StoreRoutes(routes) {

  // * filter all routes and store it
  const paths = routes.map((route) => {
    if (route.path !== "") {
      return route.path;
    }
  });

  const parseLocation = (hash) => hash.slice(1).toLowerCase(); // * normalize hash

  const findComponentByPath = (path) =>
    routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) || false;

  function router() {
    const path = parseLocation(document.location.hash);

    const { component } = findComponentByPath(path, routes); // ! {};

    let hash = window.location.hash.replace("#", ""); // * get hash url

    if (!window.location.href.includes("#/")) {
      routes.forEach(({ path, exact }) => {
        if (path === "/" && exact) {
          window.location.hash = "#/"; //* add rootPath '#/'
        }
      });
    }

    if (!paths.includes("/")) // * throw error if root path dont exist
      ErrorHandler(
        new Error("Missing root route path"),
        "Add root route path",
        true
      );

    if (!paths.includes(hash)) {
      // * if not exist the path launch default component
      routes.forEach((route) => {

        // * render default component
        if (route.path === "*" && hash !== "") {
          mount(render(route.component));
        }
        // * log message to root path
        else {
          const rootPathApp =
            window.location.origin + window.location.pathname + "#/";
          document.querySelector(
            "#root"
          ).innerHTML = `<h3>you root app link is</h3>
                          <code>
                            <a href="${rootPathApp}" style="text-decoration: none;">
                              ${rootPathApp}
                            </a>
                          </code>`;
        }
      });
    }

    if (component) {
      // * manager to mount elements into root endPoint
      mount(render(component));
    }
  }
  router();

  window.addEventListener("hashchange", router); // * manager to load and change hash event
  window.addEventListener("load", router);
}

export default StoreRoutes;
