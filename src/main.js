/** @jsx insertionJsx */

import { insertionJsx, createElement, diff, mount, render } from './dev/insertion.js';

let number = 15;

function Hola({ number }) {
  console.log('call')

  return insertionJsx(
    'div',
    { 'class': 'foo', 'click': 'hola' },
    insertionJsx(
      'button',
      { id: 'btn' },
      'click'
    ),
    insertionJsx('img', { src: `https://i.picsum.photos/id/${10}/200/300.jpg` }),
    'hola',
    insertionJsx(
      'span',
      null,
      ''
    )
  );
}

let vApp = createElement(insertionJsx(Hola, { number }));

const $app = render(vApp);

let $rootEl = mount($app);

// let vNewApp = createElement(<Hola {...{ number } }></Hola>);

// const patch = diff(vApp, vNewApp);

// $rootEl = patch($rootEl);

// vApp = vNewApp;