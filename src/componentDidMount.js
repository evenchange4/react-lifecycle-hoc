/* eslint react/require-render-return:0 */

import React from 'react';
import createEagerFactory from 'recompose/createEagerFactory';
import createHelper from 'recompose/createHelper';

const componentDidMount = callback => (BaseComponent) => {
  const factory = createEagerFactory(BaseComponent);

  return class extends React.Component {
    componentDidMount = () => callback(this)
    render = () => factory(this.props)
  };
};

export default createHelper(componentDidMount, 'componentDidMount');
