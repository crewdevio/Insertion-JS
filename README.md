# Insertion JS

Insertion JS is a Javascript library for build user interfaces using JSX and vDOM

## Installation

  working
<!-- Use the package manager [npm](https://pip.pypa.io/en/stable/) to install Wtl js. -->
<!--
``` javascript

npm install wtl

``` -->

## Hello World

⚠ It is important that all jsx components have /* @jsx insertionJsx */  at startup so that the compiler does not compile to react js ⚠

``` javascript

/* @jsx insertionJsx */ // 👈 Important!!!

import { insertionJsx, createElement, mount, render, Fragment } from 'insertion';


function App({ props }){
    const metaFragment = {
            id: 'AppComponent',
            class:  'App',
    }

    return (
        <Fragment {...{ metaFragment }}>
           <h1 id={props.id} className={props.className} >
            Hello world
           </h1>
        </Fragment>
      );
};

const props = {
    id: 'app',
    className: 'color-app'
};

const app = createElement(<App {...{ props }}></App>);

mount(render(app));

```

<!-- ## Running Hello World

``` javascript

npm install

npm run start:server

``` -->
## Documentation
[Documentation](#)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://opensource.org/licenses/MIT)