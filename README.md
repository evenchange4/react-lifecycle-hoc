# react-lifecycle-hoc [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/evenchange4/react-lifecycle-hoc/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-lifecycle-hoc

[npm-badge]: https://img.shields.io/npm/v/react-lifecycle-hoc.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-lifecycle-hoc

Higher-order components of react lifecycle.

```
npm install react-lifecycle-hoc --save
```

## API

```
componentDidMount(
  callback: (props: Object) => void,
  BaseComponent: ReactElementType
): ReactElementType
```

## Usage

- As HOC

```
import { componentDidMount } from 'react-lifecycle-hoc';

componentDidMount(
  props => console.log(props),
  () => <div/>,
);
```

- ES7 decorator

```
@componentDidMount(callback)
class Container extends React.Component {
  render() {
    return <div/>;
  }
}
```
