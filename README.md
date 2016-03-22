# react-lifecycle-hoc

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
