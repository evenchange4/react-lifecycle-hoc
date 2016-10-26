# react-lifecycle-hoc

## [HEAD]
> Unreleased

## [v3.1.0]
> Oct 26, 2016

* feat(node): upgrade to node v6
* feat(npm): upgrade to npm v3
* feat(eslint): upgrade to eslint v3
* feat(recompose): upgrade to recompose v0.20

## [v3.0.0]
> Apr 12, 2016

* chore(ava): update lint and test
* chore(codecov): switch to use codecov
* chore(react): update to 15.0.1

### **Breaking changes**

* Remove curry as recompose@0.17.0 does

  Before

  ```js
  const Container = componentDidMount(
    callbackSpy,
    () => <div />,
  );
  ```

  After

  ```js
  const Container = componentDidMount(
    callbackSpy,
  )(() => <div />);
  ```

## [v2.0.0]
> Mar 27, 2016

* [Breaking] refactor(componentDidMount): pass `this` to the callback.

## [v1.0.4]
> Mar 26, 2016

* fix(eslint): introduce `lint-config-m` and fix parser error.

## [v1.0.2]
> Mar 22, 2016

* test(travis): setup test

## [v1.0.0]
> Mar 22, 2016

* feat(componentDidMount): add componentDidMount HOC
