/* eslint no-unused-expressions: 0 */
import { default as React } from 'react';
import { default as TestUtils } from 'react/lib/ReactTestUtils';
import { default as componentDidMount } from './componentDidMount.js';

describe('decorators/componentDidMount', () => {
  it('works with componentDidMount HOC', () => { // eslint-disable-line padded-blocks
    const callbackSpy = sinon.spy();

    @componentDidMount(callbackSpy)
    class Container extends React.Component {
      render() {
        return <div/>;
      }
    }

    TestUtils.renderIntoDocument(<Container/>);

    expect(callbackSpy).to.have.been.calledOnce;
  });
});
