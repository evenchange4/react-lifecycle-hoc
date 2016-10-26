import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { compose } from 'recompose';
import { default as reactLifecycleHoc, componentDidMount } from '../src/index';

test('should return a object', (t) => {
  t.is(typeof reactLifecycleHoc, 'object');
});

test('should contain componentDidMount function', (t) => {
  t.is(typeof reactLifecycleHoc.componentDidMount, 'function');
});

test('should works with HOC', (t) => {
  const callbackSpy = sinon.spy();

  const Container = compose(
    componentDidMount(callbackSpy),
  )(() => <div />);

  mount(<Container />);

  t.true(callbackSpy.calledOnce);
});

test('should return correct props', (t) => {
  let propsSpy;

  const hoc = componentDidMount(
    ({ props }) => { propsSpy = props.className; },
  );

  const Container = hoc(() => <div />);

  mount(<Container className="expectClassName" />);

  t.is(propsSpy, 'expectClassName');
});
