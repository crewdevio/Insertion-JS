window.INSERTION_COMPONENTS = {};

const nativeComponents = ["Router", "Switch", "Route", "Link", "Fragment"];

function AddDebugger(tagName, attrs) {
  if (!nativeComponents.includes(tagName.name) && tagName.name) {
    if (window.INSERTION_COMPONENTS[tagName.name]) {
      window.INSERTION_COMPONENTS[tagName.name] = {
        type: "BUILD",
        component: tagName.name,
        props: attrs === null ? {} : attrs,
      };
    } else {
      window.INSERTION_COMPONENTS[tagName.name] = {
        type: "BUILD",
        component: tagName.name,
        props: attrs === null ? {} : attrs,
      };
    }
  }
}

window.INSERTION_DEBUGGER_COMPONENTS = function (config = false) {
  console.clear();
  console.group('%cInsertion Debugger Components 👨‍💻‍', 'font-size: 1.4rem;');
    for (const key in window.INSERTION_COMPONENTS) {
      const { props } =  window.INSERTION_COMPONENTS[key];
      console.group(`%c${key}`, 'font-size: 1.2rem;');
        console.group('%cChildrens ', 'color: rgb(4, 228, 228); font-size: 1rem;');
          console.log(props.children);
        console.groupEnd();
        console.group('%cProps', 'color: rgb(228, 4, 127); font-size: 1rem;');
          delete props.children
          console.log(props);
        console.groupEnd();
      console.groupEnd();
  }
  console.groupEnd();
};

export default AddDebugger;
