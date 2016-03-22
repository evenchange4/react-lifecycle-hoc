import React from 'react';
import { expect } from 'chai'
import { spy } from 'sinon'
import { mount } from 'enzyme'
import componentDidMount from '../src/componentDidMount';

describe('react-lifecycle-hoc/componentDidMount', () => {
  it('works with HOC', () => {
    const callbackSpy = spy();

    const Container = componentDidMount(
      callbackSpy,
      () => <div />,
    );

    const component = mount(<Container />);

    expect(callbackSpy).to.be.callOnce;
  });
});
