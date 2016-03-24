import React from 'react';
import test from 'ava';
import sinon from 'sinon'
import { mount } from 'enzyme'
import { default as reactLifecycleHoc, componentDidMount } from '../src/index';

test('should return a object', t => {
  t.is(typeof reactLifecycleHoc, 'object');
});

test('should contain componentDidMount function', t => {
  t.is(typeof reactLifecycleHoc.componentDidMount, 'function');
});

test('should works with HOC', t => {
  const callbackSpy = sinon.spy();

  const Container = componentDidMount(
    callbackSpy,
    () => <div />,
  );

  const component = mount(<Container />);

  t.true(callbackSpy.calledOnce);
});
