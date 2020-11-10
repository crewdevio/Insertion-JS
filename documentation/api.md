# Getstarted

### Installing

use the [_npm i insertion_](https://www.npmjs.com/package/insertion) command to download the library
you need:

- npm >= v6.x
- nodeJs >= v12.x

### Folder structure

Here's a folder structure for a Simple Project:

```bash
my-project/  # Root directory.
|- public/
|- src/
  |- components/
  |- main.js
|- .babelrc
|- package.json
```

### Set Up your workspace

Edit the _.babelrc_ file to set configuration data:

```javascript
{
  "presets": ["react"]
}
```

compiler using

```bash

babel yourSourceFolder/ -d yourTargetFolder

```

### Creating main.js

Creating a main.js for a project from scratch:

```javascript
/* @jsx insertionJsx */

import { insertionJsx, Fragment } from "insertion";
import { createElement, mount, render } from "insertion";

import YourComponent from "./components/myComponent.js";

function Main() {
  return (
    <Fragment>
      <YourComponent />
    </Fragment>
  );
}

let main = createElement(<Main />);
mount(render(main));
```

**_we recommend using the template for projects_**

## Events

- `Click`
- `Focus`
- `Change`
- `Keyup`
- `Keydown`
- `Keypress`
- `Copy`
- `Cut`
- `Paste`
- `Mouseover`
- `Mousemove`
- `Mouseleave`
- `Mouseout`
- `Mouseenter`
- `Load`
- `Keyenter`
- `Keyesc`
- `Keyspace`
- `Keyalt`
- `Keyctrl`
- `Keyback`

### Example

```javascript
/* @jsx insertionJsx */

import insertionJsx, {
  Fragment,
  createElement,
  mount,
  render,
} from "insertion";

function Main() {
  return (
    <Fragment>
      <button Click={(e) => console.log(e.target)}>Click me</button>
    </Fragment>
  );
}

let main = createElement(<Main />);
mount(render(main));
```

## Using diff

```javascript
/* @jsx insertionJsx */

import insertionJsx, { diff, createElement, mount, render } from "insertion";

function Main({ counter }) {
  return (
    <div>
      <span>count is {counter}</span>
    </div>
  );
}

let main = createElement(<Main count={0} />);
let root = mount(render(main));

let counter = 0;
setTimeout(() => {
  let updated = createElement(<Main count={counter++} />);

  let path = diff(main, updated);

  root = path(root);

  main = updated;
}, 1500);
```
