function Switch({ children }) {
  const depure = { childs: [], routes: [] };

  children.forEach((element) => {
    if (typeof element === "string") {
      depure.childs.push(element);
    } else {
      depure.routes.push(element);
    }
  });

  return { routes: depure.routes, children: depure.childs };
}

export default Switch;
