import React from 'react';
import createElement from 'recompose/createElement';
import createHelper from 'recompose/createHelper';

const componentDidMount = (callback, BaseComponent) =>
  class extends React.Component {
    componentDidMount() {
      callback(this.props);
    }
    render() {
      return createElement(BaseComponent, this.props);
    }
  };

export default createHelper(componentDidMount, 'componentDidMount');
