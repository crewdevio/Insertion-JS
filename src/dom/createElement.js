import transpiler from './transpiler.js';

function createElement(node, target = false) {

    // * create div to mount the component
    const mount = document.createElement('div');

    if (target){
        mount.setAttribute('src', target);
    }

    else {
        mount.setAttribute('src', 'root');
    }

    mount.innerHTML = node;

    // * return obj like { tagName, attrs, children }
    return transpiler(mount);

};


export default createElement;