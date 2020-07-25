---
id: styles
title: 'React Styles'
sidebar_label: 'React Styles'
---

## How to use styles in React?

The `style` attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.

```jsx harmony
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes in JavaScript (e.g. `node.style.backgroundImage`).

---

## How to conditionally apply class attributes?

You shouldn't use curly braces inside quotes because it is going to be evaluated as a string.

```jsx harmony
    <div className="btn-panel {this.props.visible ? 'show' : 'hidden'}">
```

Instead you need to move curly braces outside (don't forget to include spaces between class names):

```jsx harmony
    <div className={'btn-panel ' + (this.props.visible ? 'show' : 'hidden')}>
```

_Template strings_ will also work:

```jsx harmony
    <div className={`btn-panel ${this.props.visible ? 'show' : 'hidden'}`}>
```

---

## How to use React label element?

If you try to render a `<label>` element bound to a text input using the standard `for` attribute, then it produces HTML missing that attribute and prints a warning to the console.

```jsx harmony
    <label for={'user'}>{'User'}</label>
    <input type={'text'} id={'user'} />
```

Since `for` is a reserved keyword in JavaScript, use `htmlFor` instead.

```jsx harmony
    <label htmlFor={'user'}>{'User'}</label>
    <input type={'text'} id={'user'} />
```

---

## How to combine multiple inline style objects?

You can use _spread operator_ in regular React:

```jsx harmony
<button style={{...styles.panel.button, ...styles.panel.submitButton}}>
  {'Submit'}
</button>
```

If you're using React Native then you can use the array notation:

```jsx harmony
<button style={[styles.panel.button, styles.panel.submitButton]}>
  {'Submit'}
</button>
```

---

### How do you apply vendor prefixes to inline styles in React?

React _does not_ apply _vendor prefixes_ automatically. You need to add vendor prefixes manually.

```jsx harmony
<div
  style={{
    transform: 'rotate(90deg)',
    WebkitTransform: 'rotate(90deg)', // note the capital 'W' here
    msTransform: 'rotate(90deg)', // 'ms' is the only lowercase vendor prefix
  }}
/>
```

---

### What are the popular packages for animation?

_React Transition Group_ and _React Motion_ are popular animation packages in React ecosystem.

---

### What is the benefit of styles modules?

It is recommended to avoid hard coding style values in components. Any values that are likely to be used across different UI components should be extracted into their own modules.

##### For example, these styles could be extracted into a separate component:

```javascript
export const colors = {
  white,
  black,
  blue,
};

export const space = [0, 8, 16, 32, 64];
```

And then imported individually in other components:

```javascript
import {space, colors} from './styles';
```

---
