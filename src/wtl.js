/*
Project WTL JS V 0.0.1 Author Erick Sosa Garcia.
license GPL-v3.0 copyright (c) 2020.
*/
// module "my-module.js"

"use strict";

import hyperJsx from './hyper.js';
import tr from './vdom/traspiler.js';


const Version = `Project WTL JS V 0.3.0
    copyright (c) license GPL-v3.0
    Github of the project https://github.com/wtl-js-project/WTL-JS`;

/* @ array methods*/
Array.prototype.range = function (val, cl, jump = false) {
    if (typeof val === "number" && typeof cl === "number") {
        for (let i = val; i <= cl; i++) {
            this.push(i);
        }
    } else if (typeof val !== "number" || typeof val === undefined) {
        throw new Error(`[ WTL warning! ]:
              the first parameter is not a number is a  ${typeof val}`);
    } else if (typeof cl !== "number" || typeof val === undefined) {
        throw new Error(`[ WTL warning! ]:
              the second parameter is not a number is a ${typeof cl}`);
    }
};

Array.prototype.remove = function (element, indexElement = false) {
    const elementCache = [];
    for (const item of this) {
        try {
            elementCache.push(JSON.stringify(item));
        } catch (error) {
            elementCache.push(item);
        }
    }
    if (typeof this === "object" && (typeof element === "undefined" || "object" || "number" || "string" || "boolean")) {
        const index = indexElement ? indexElement : elementCache.indexOf(JSON.stringify(element));
        if (index !== -1) {
            return this.splice(index, 1);
        }
    } else if (typeof indexElement !== "boolean" && typeof indexElement !== "number") {
        throw new Error(`[ WTL warning! ]: you have to pass the first parameter
        that is the Element array and the second parameter that is the index Element to delete`);
    }
};

Array.prototype.Sorted = function () {
    this.sort((a, b) => a - b);
    return this;
};

Array.prototype.random = function () {
    this.sort(_ => Math.random() - 0.5);
    return this;
};

/* Number methods*/

Number.random = function (max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
};

window.isNull = function (element) {
    return element === null ? true : false;
};

//wtl version
const WTLversion = _ => console.log(Version);

// instance wtl
class Wtl {
    constructor(val) {
        this.target = val.target;
        this.data = val.data;
        this.disconnectedElement = void WTLversion();
        (function () {
            let data = val.data;
            let target = val.target;
            const quoteData = new Proxy(data, {
                set: (target, property, value) => {
                    target[property] = value;
                    quoteNode.render(data);
                    return true;
                }
            });
            const quoteNode = document.querySelector(`#${target}`);
            quoteNode.template = quoteNode.innerHTML;
            quoteNode.render = function render(data) {
                this.innerHTML = this.template.replace(/\{\{\s?(\w+)\s?\}\}/g, (mtc, val) => {
                    return data[val] || "";
                });
            };
            const quotes = [];
            const quoteNumber = Math.ceil(Math.random());
            quoteData.quote = quotes[quoteNumber];
        })();
        (function () {
            var elements = document.querySelectorAll("[wtl-bind]"),
                scope = {};
            elements.forEach(function (element) {
                //execute scope setter
                if (element.type === "text" || element.type === "textarea") {
                    var propToBind = element.getAttribute("wtl-bind");
                    addScopeProp(propToBind);
                    element.onkeyup = function () {
                        scope[propToBind] = element.value;
                    };
                }
                //bind prop to elements
                function addScopeProp(prop) {
                    //add property if needed
                    if (!scope.hasOwnProperty(prop)) {
                        //value to populate with newvalue
                        var value;
                        Object.defineProperty(scope, prop, {
                            set: function (newValue) {
                                value = newValue;
                                elements.forEach(function (element) {
                                    //change value to binded elements
                                    if (element.getAttribute("wtl-bind") === prop) {
                                        if (element.type && (element.type === "text" || element.type === "textarea")) {
                                            element.value = newValue;
                                        } else if (!element.type) {
                                            element.innerHTML = newValue;
                                        }
                                    }
                                });
                            },
                            get: function () {
                                return value;
                            },
                            el: true
                        });
                    }
                }
            });
        })();
    }
    // components
    components(componentData) {
        const Component = componentData.template;
        const Tag = componentData.tag;
        const Dom = componentData.shadow;

        function render(data, cl, gost = false) {
            class Defauld extends HTMLElement {
                constructor() {
                    super();
                }
                connectedCallback() {
                    this.disconnectedElement = false;
                    if (gost) {
                        const shadowRoot = this.attachShadow({
                            mode: "open"
                        });
                        shadowRoot.innerHTML = data;
                    } else {
                        this.innerHTML = data;
                    }
                }

            }
            window.customElements.define(cl, Defauld);
        }
        render(Component, Tag, Dom);
    }
}

function Stade(value) {
    const data = value;
    return data;
};


function useStade(initialState) {
    Stade(initialState)
    return [Stade];
};

//  create tag
const CreateTag = attr => {
    const Tag = document.createElement(attr.tag);
    for (let i in attr) {
        Tag.setAttribute(i, attr[i]);
    }
    return Tag;
};

// conditional rendering
function RenderIf(res, Else) {
    // render node template
    let target = null;
    for (let values of document.querySelectorAll("[wtl-if]")) {
        target = document.querySelector(`[wtl-if="${values.getAttribute("wtl-if")}"]`);
    }
    const condition = eval(target.getAttribute('wtl-if'));
    const render = function (template, node) {
        if (!node) return;
        node.innerHTML = typeof template === 'function' ? template() : template;
    };
    // A function that returns a string
    let template = () => {
        if (condition) {
            template = res;
        } else {
            template = Else;
        }
        return template;
    };
    return render(template, target);
};

const JsxCompiler = (type, props, ...args) => {
    const children = args.length ? [].concat(...args) : null;
    return {
        type,
        props,
        children
    };
};

const createElement = node => {
    const mount = document.createElement('div');
    if (typeof node === 'string') {
        mount.setAttribute('src', 'root');
        mount.innerHTML = node;
        return tr(mount);
    }
    const element = document.createElement(node.type);
    if (node.props) {
        Object.entries(node.props).forEach(prop => {
            element.setAttribute(prop[0], prop[1]);
        });
    }
    if (node.children) {
        node.children.map(createElement).forEach(child => element.appendChild(child));
    }
    return element;
};

export {
    Wtl,
    createElement,
    JsxCompiler,
    RenderIf,
    useStade,
    hyperJsx
};