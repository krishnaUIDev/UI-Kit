---
id: lazySuspense
title: 'lazy and suspence'
sidebar_label: 'lazy suspence'
---

### Is lazy function supports named exports?

No, currently `React.lazy` function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components. Let's take a component file which exports multiple named components,

```javascript
    // MoreComponents.js
    export const SomeComponent = /* ... */;
    export const UnusedComponent = /* ... */;
```

and reexport `MoreComponents.js` components in an intermediate file `IntermediateComponent.js`

```javascript
// IntermediateComponent.js
export {SomeComponent as default} from './MoreComponents.js';
```

Now you can import the module using lazy function as below,

```javascript
import React, {lazy} from 'react';
const SomeComponent = lazy(() => import('./IntermediateComponent.js'));
```

---

## How do you memoize a component?

There are memoize libraries available which can be used on function components.

For example `moize` library can memoize the component in another component.

```jsx harmony
import moize from 'moize';
import Component from './components/Component'; // this module exports a non-memoized component

const MemoizedFoo = moize.react(Component);

const Consumer = () => {
  <div>
    {'I will memoize the following entry:'}
    <MemoizedFoo />
  </div>;
};
```

**Update:** Since React v16.6.0, we have a `React.memo`. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.

```js
const MemoComponent = React.memo(function MemoComponent(props) {
  /* render using props */
});
```

OR

```js
export default React.memo(MyFunctionComponent);
```

---
