import transpiler from './transpiler.js';

const createElement = node => {
    const mount = document.createElement('div');
    if (typeof node === 'string') {
        mount.setAttribute('src', 'root');
        mount.innerHTML = node;
        return transpiler(mount);
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


export default createElement;