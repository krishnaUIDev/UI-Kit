---
id: events
title: 'Events and Event handlings'
sidebar_label: 'Events and Event handlings'
---

### What is the difference between HTML and React event handling?

#### Below are some of the main differences between HTML and React event handling,

1. In HTML, the event name should be in _lowercase_:

```html
<button onclick="activateLasers()"></button>
```

Whereas in React it follows _camelCase_ convention:

```jsx harmony
  <button onClick={activateLasers}>
```

2. In HTML, you can return `false` to prevent default behavior:

```html
<a href="#" onclick='console.log("The link was clicked."); return false;' />
```

Whereas in React you must call `preventDefault()` explicitly:

```javascript
function handleClick(event) {
  event.preventDefault();
  console.log('The link was clicked.');
}
```

3. In HTML, you need to invoke the function by appending `()` Whereas in react you should not append `()` with the function name. (refer "activateLasers" function in the first point for example)

---

### How to bind methods or event handlers in JSX callbacks?

#### There are 3 possible ways to achieve this:

1. **Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.

```javascript
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // ...
  }
}
```

2. **Public class fields syntax:** If you don't like to use bind approach then _public class fields syntax_ can be used to correctly bind callbacks.

```jsx harmony
handleClick = () => {
  console.log('this is:', this);
};
```

```jsx harmony
<button onClick={this.handleClick}>{'Click me'}</button>
```

3. **Arrow functions in callbacks:** You can use _arrow functions_ directly in the callbacks.

```jsx harmony
<button onClick={(event) => this.handleClick(event)}>{'Click me'}</button>
```

**Note:** If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with `.bind()` or _public class fields syntax_ approach considering performance.

---

### How to pass a parameter to an event handler or callback?

You can use an _arrow function_ to wrap around an _event handler_ and pass parameters:

```jsx harmony
<button onClick={() => this.handleClick(id)} />
```

#### This is an equivalent to calling `.bind`:

```jsx harmony
<button onClick={this.handleClick.bind(this, id)} />
```

#### Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

```jsx harmony
<button onClick={this.handleClick(id)} />;
handleClick = (id) => () => {
  console.log('Hello, your ticket number is', id);
};
```

<!-- **[⬆ Back to Top](#table-of-contents)** -->

---

### What are synthetic events in React?

`SyntheticEvent` is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.

---

### How events are different in React?

#### Handling events in React elements has some syntactic differences:

1. React event handlers are named using camelCase, rather than lowercase.
2. With JSX you pass a function as the event handler, rather than a string.

---

## What are the Pointer Events supported in React?

_Pointer Events_ provide a unified way of handling all input events. In the old days we had a mouse and respective event listeners to handle them but nowadays we have many devices which don't correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the _Pointer Events_ specification.

The following event types are now available in _React DOM_:

1. `onPointerDown`
2. `onPointerMove`
3. `onPointerUp`
4. `onPointerCancel`
5. `onGotPointerCapture`
6. `onLostPointerCapture`
7. `onPointerEnter`
8. `onPointerLeave`
9. `onPointerOver`
10. `onPointerOut`

---

### How to programmatically trigger click event in React?

You could use the ref prop to acquire a reference to the underlying `HTMLInputElement` object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the `HTMLElement.click` method.

##### This can be done in two steps:

1. Create ref in render method:

```jsx harmony
<input ref={(input) => (this.inputElement = input)} />
```

2. Apply click event in your event handler:

```javascript
this.inputElement.click();
```

---
