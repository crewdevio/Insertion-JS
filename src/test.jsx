/** @jsx hyperJsx */

import { hyperJsx, createElement } from './wtl.js';

import mount from './vdom/mount.js';
import diff from './vdom/diff.js';
import render from './vdom/render.js'

let number = 15;

function Hola({ number }){
    const add = () => {
      const el = document.createElement('p');
      el.innerHTML = 'klk';
      document.querySelector('.foo').appendChild(el);
    }
    return (
        <div class="foo">
        <button id="btn">click</button>
          <img src={`https://i.picsum.photos/id/${10}/200/300.jpg`} />
          hola
          <span>klk</span>
        </div>
      );
}

let vApp = createElement(<Hola {...{ number }}></Hola>);

const $app = render(vApp);

let $rootEl = mount($app);

console.log(VApp);

// let vNewApp = createElement(<Hola {...{ number } }></Hola>);

// const patch = diff(vApp, vNewApp);

// $rootEl = patch($rootEl);

// vApp = vNewApp;