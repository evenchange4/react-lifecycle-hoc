# react-lifecycle-hoc

> Higher-order components of react lifecycle.

[![Travis][build-badge]][build] [![Codecov Status][codecov-badge]][codecov] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[![Dependency Status][dependency-badge]][dependency] [![devDependency Status][devDependency-badge]][devDependency] [![peerDependency Status][peerDependency-badge]][peerDependency]

[build-badge]: https://img.shields.io/travis/evenchange4/react-lifecycle-hoc/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-lifecycle-hoc

[npm-badge]: https://img.shields.io/npm/v/react-lifecycle-hoc.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-lifecycle-hoc

[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/react-lifecycle-hoc.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/react-lifecycle-hoc?branch=master

[npm-downloads]: https://img.shields.io/npm/dt/react-lifecycle-hoc.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/react-lifecycle-hoc.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

[dependency-badge]: https://david-dm.org/evenchange4/react-lifecycle-hoc.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/react-lifecycle-hoc
[devDependency-badge]: https://david-dm.org/evenchange4/react-lifecycle-hoc/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/react-lifecycle-hoc#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/react-lifecycle-hoc/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/react-lifecycle-hoc#info=peerDependencies

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
)(() => <div/>);
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
): HigherOrderComponent
```

## Test

```
$ npm run lint
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
