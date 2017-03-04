# hyperstyler

Recursively apply [CSS Modules] \(from [Webpack]'s [CSS-loader]) to [hyperscript]\(-compatible) [VNodes].

[CSS Modules]: https://github.com/css-modules/css-modules
[Webpack]: http://webpack.js.org
[CSS-loader]: https://github.com/webpack-contrib/css-loader#css-scope
[hyperscript]: https://github.com/hyperhype/hyperscript
[VNodes]: http://mithril.js.org/vnodes.html

[hyperstyles]: https://github.com/colingourlay/hyperstyles
[react-css-modules]: https://github.com/gajus/react-css-modules

## Install

```
npm i hyperstyler
```

## Usage

```
import { Component } from 'preact';
import { createElement as h } from 'preact-hyperscript';

import hyperstyler from 'hyperstyler';
import styles from './styles.styl';

export default class Book extends Component {
  render () {
    const el = h('div.parent', [
      h('span.child', [
        'Hello World!'
      ])
    ])
    return hyperstyler(el, styles);
    // style.parent and style.child classes applied to respective VNodes
  }
}
```
