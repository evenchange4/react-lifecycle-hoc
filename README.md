# react-lifecycle-hoc
[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coverage Status][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/evenchange4/react-lifecycle-hoc/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-lifecycle-hoc

[npm-badge]: https://img.shields.io/npm/v/react-lifecycle-hoc.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-lifecycle-hoc

[coveralls-badge]: https://img.shields.io/coveralls/evenchange4/react-lifecycle-hoc/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/evenchange4/react-lifecycle-hoc

> Higher-order components of react lifecycle.

```
npm install react-lifecycle-hoc --save
```

## API

```js
componentDidMount(
  callback: (props: Object) => void,
  BaseComponent: ReactElementType
): ReactElementType
```

## Usage

- As HOC

```js
import { componentDidMount } from 'react-lifecycle-hoc';

componentDidMount(
  props => console.log(props),
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
