# Insertion JS

Insertion JS is a Javascript library for build user interfaces using JSX and vDOM

## Installation

Use the package manager [npm](https://www.npmjs.com/package/insertion) to install.

```javascript

npm i insertion

```

## Hello World

⚠ It is important that all jsx components have /* @jsx insertionJsx */  at startup so that the compiler does not compile to react js ⚠

``` javascript
/* @jsx insertionJsx */

import { insertionJsx, createElement, mount, render, Fragment } from 'insertion';

function App({ message }){
    return (
        <Fragment>
           <h1>
            { message }
           </h1>
        </Fragment>
      );
};

const app = createElement(<App message={'hello world'} />);

mount(render(app));

```

## Running Hello World

``` javascript

npm install

npm run start:server

```
## Documentation
[API Reference](/documentation/api.md)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://opensource.org/licenses/MIT)