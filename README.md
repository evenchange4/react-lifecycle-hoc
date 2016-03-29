# react-lifecycle-hoc

> Higher-order components of react lifecycle.

[![Travis][build-badge]][build] [![Coverage Status][coveralls-badge]][coveralls] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[build-badge]: https://img.shields.io/travis/evenchange4/react-lifecycle-hoc/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-lifecycle-hoc

[npm-badge]: https://img.shields.io/npm/v/react-lifecycle-hoc.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-lifecycle-hoc

[coveralls-badge]: https://img.shields.io/coveralls/evenchange4/react-lifecycle-hoc/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/evenchange4/react-lifecycle-hoc

[npm-downloads]: https://img.shields.io/npm/dt/react-lifecycle-hoc.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/react-lifecycle-hoc.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

## Installation

```console
$ npm install react-lifecycle-hoc --save
```

## Usage

- As HOC

```js
import { componentDidMount } from 'react-lifecycle-hoc';

componentDidMount(
  ({ props }) => console.log(props),
  () => <div/>,
);
```

- ES7 decorator

```js
@componentDidMount(callback)
class Container extends React.Component {
  render() {
    return <div/>;
  }
}
```

## API

```js
componentDidMount(
  callback: (this: Object) => void,
  BaseComponent: ReactElementType
): ReactElementType
```

## Test

```
$ npm run test:watch
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)
