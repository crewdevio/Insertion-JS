/** @jsx hyperJsx */

import { hyperJsx, createElement } from './wtl.js';

import mount from './vdom/mount.js';
import diff from './vdom/diff.js';
import render from './vdom/render.js';

let number = 15;

function Hola({ number }) {
  console.log('call')

  return hyperJsx(
    'div',
    { 'class': 'foo', '@click': '' },
    hyperJsx(
      'button',
      { id: 'btn' },
      'click'
    ),
    hyperJsx('img', { src: `https://i.picsum.photos/id/${10}/200/300.jpg` }),
    'hola',
    hyperJsx(
      'span',
      null,
      ''
    )
  );
}

let vApp = createElement(hyperJsx(Hola, { number }));

const $app = render(vApp);

let $rootEl = mount($app);

// console.log(VApp);

// let vNewApp = createElement(<Hola {...{ number } }></Hola>);

// const patch = diff(vApp, vNewApp);

// $rootEl = patch($rootEl);

// vApp = vNewApp;