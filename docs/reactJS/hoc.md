---
id: hoc
title: 'HOC'
sidebar_label: 'HOC'
---

## What are Higher-Order Components?

A _higher-order component_ (_HOC_) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

We call them **pure components** because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

HOC can be used for many use cases:

1. Code reuse, logic and bootstrap abstraction.
2. Render hijacking.
3. State abstraction and manipulation.
4. Props manipulation.

---

### How to create props proxy for HOC component?

#### You can add/edit props passed to the component using _props proxy_ pattern like this:

```jsx harmony
function HOC(WrappedComponent) {
  return class Test extends Component {
    render() {
      const newProps = {
        title: 'New Header',
        footer: false,
        showFeatureX: false,
        showFeatureY: true,
      };

      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}
```

---

## What is context?

_Context_ provides a way to pass data through the component tree without having to pass props down manually at every level.

For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.

```javascript
const {Provider, Consumer} = React.createContext(defaultValue);
```

---

## Do Hooks replace render props and higher order components?

Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree.

---
