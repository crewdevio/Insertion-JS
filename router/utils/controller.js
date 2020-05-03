function Path() {
  const add = [];
  return function (path, component) {

    if (path) {
      add.push({ path: path, component: component });
    }
    return add;
  };
}

const Add = Path();

// Routes
(async function () {
  const routes = await Add();

  const parseLocation = hash => hash.slice(1).toLowerCase() || "/";

  const findComponentByPath = path => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, "gm"))) || false;

  const router = (e) => {

    const path = parseLocation(document.location.hash);
    const { component } = findComponentByPath(path, routes); // ! {};

    if (component) {
      document.getElementById("root").innerHTML = component;
    }
  };

  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);
})();

export default Add;