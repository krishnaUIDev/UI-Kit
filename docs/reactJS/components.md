---
id: components
title: 'Components'
sidebar_label: 'Components'
---

### How to create components in React?

#### There are two possible ways to create a component.

- **Function Components:** This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements:

```jsx
function Greeting({message}) {
  return <h1>{`Hello, ${message}`}</h1>;
}
```

- **Class Components:** You can also use ES6 class to define a component. The above function component can be written as:

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
}
```

---

### What are Pure Components?

_`React.PureComponent`_ is exactly the same as _`React.Component`_ except that it handles the `shouldComponentUpdate()` method for you. When props or state changes, _PureComponent_ will do a shallow comparison on both props and state. _Component_ on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever `shouldComponentUpdate` is called.

---

### When to use a Class Component over a Function Component?

If the component needs _state or lifecycle methods_ then use class component otherwise use function component. _However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component._

---

### What is the difference between Element and Component?

An _Element_ is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. _Elements_ can contain other _Elements_ in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

The object representation of React Element would be as follows:

```javascript
const element = React.createElement('div', {id: 'login-btn'}, 'Login');
```

The above `React.createElement()` function returns an object:

```javascript
 {
      type: 'div',
      props: {
        children: 'Login',
        id: 'login-btn'
      }
 }
```

And finally it renders to the DOM using `ReactDOM.render()`:

```html
<div id="login-btn">Login</div>
```

Whereas a **component** can be declared in several different ways. It can be a class with a `render()` method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:

```javascript
const Button = ({onLogin}) => (
  <div id={'login-btn'} onClick={onLogin}>
    Login
  </div>
);
```

Then JSX gets transpiled to a `React.createElement()` function tree:

```javascript
const Button = ({onLogin}) =>
  React.createElement('div', {id: 'login-btn', onClick: onLogin}, 'Login');
```

---

### What are controlled components?

A component that controls the input elements within the forms on subsequent user input is called **Controlled Component**, i.e, every state mutation will have an associated handler function.

#### For example, to write all the names in uppercase letters, we use handleChange as below,

```javascript
    handleChange(event) {
      this.setState({value: event.target.value.toUpperCase()})
    }
```

---

### What are uncontrolled components?

The **Uncontrolled Components** are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

In the below UserProfile component, the `name` input is accessed using ref.

```jsx harmony
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {'Name:'}
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

In most cases, it's recommend to use controlled components to implement forms.

---

### What are stateless components?

If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the `this` keyword altogether.

---

### What are stateful components?

If the behaviour of a component is dependent on the _state_ of the component then it can be termed as stateful component. These _stateful components_ are always _class components_ and have a state that gets initialized in the `constructor`.

```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  render() {
    // ...
  }
}
```

**React 16.8 Update:** Hooks let you use state and other React features without writing classes.

_The Equivalent Functional Component_

```javascript
        import React, {useState} from 'react';
        const App = (props) => {
          const [count, setCount] = useState(0);
          return (
            // JSX
          )
        }
```

---

### How to import and export components using React and ES6?

You should use default for exporting the components

```jsx harmony
import React from 'react';
import User from 'user';

export default class MyProfile extends React.Component {
  render() {
    return <User type="customer">//...</User>;
  }
}
```

With the export specifier, the MyProfile is going to be the member and exported to this module and the same can be imported without mentioning the name in other components.

---

### Why is a component constructor called only once?

React's _reconciliation_ algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it's the same component as before, so reuses the previous instance rather than creating a new one.

---

### How do you conditionally render components?

In some cases you want to render different components depending on some state. JSX does not render `false` or `undefined`, so you can use conditional _short-circuiting_ to render a given part of your component only if a certain condition is true.

```jsx harmony
const MyComponent = ({name, address}) => (
  <div>
    <h2>{name}</h2>
    {address && <p>{address}</p>}
  </div>
);
```

#### If you need an `if-else` condition then use _ternary operator_.

```jsx harmony
const MyComponent = ({name, address}) => (
  <div>
    <h2>{name}</h2>
    {address ? <p>{address}</p> : <p>{'Address is not available'}</p>}
  </div>
);
```

---

## What is the recommended way for naming components?

It is recommended to name the component by reference instead of using `displayName`.

Using `displayName` for naming component:

```javascript
export default React.createClass({
  displayName: 'TodoApp',
  // ...
});
```

The **recommended** approach:

```javascript
export default class TodoApp extends React.Component {
  // ...
}
```

---

## What is the recommended ordering of methods in component class?

_Recommended_ ordering of methods from _mounting_ to _render stage_:

1. `static` methods
2. `constructor()`
3. `getChildContext()`
4. `componentWillMount()`
5. `componentDidMount()`
6. `componentWillReceiveProps()`
7. `shouldComponentUpdate()`
8. `componentWillUpdate()`
9. `componentDidUpdate()`
10. `componentWillUnmount()`
11. click handlers or event handlers like `onClickSubmit()` or `onChangeDescription()`
12. getter methods for render like `getSelectReason()` or `getFooterContent()`
13. optional render methods like `renderNavigation()` or `renderProfilePicture()`
14. `render()`

---

## What is a switching component?

A _switching component_ is a component that renders one of many components. We need to use object to map prop values to components.

For example, a switching component to display different pages based on `page` prop:

```jsx harmony
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

const PAGES = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  contact: ContactPage,
};

const Page = (props) => {
  const Handler = PAGES[props.page] || ContactPage;

  return <Handler {...props} />;
};

// The keys of the PAGES object can be used in the prop types to catch dev-time errors.
Page.propTypes = {
  page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};
```

---

## Why should component names start with capital letter?

If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

```jsx harmony
class SomeComponent extends Component {
  // Code goes here
}
```

You can define component class which name starts with lowercase letter, but when it's imported it should have capital letter. Here lowercase is fine:

```jsx harmony
class myComponent extends Component {
  render() {
    return <div />;
  }
}

export default myComponent;
```

#### While when imported in another file it should start with capital letter:

```jsx harmony
import MyComponent from './MyComponent';
```

---

## What are the exceptions on React component naming?

The component names should start with a uppercase letter but there are few exceptions on this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names.

For example the below tag can be compiled to a valid component,

```javascript
     render(){
        return (
            <obj.component /> // `React.createElement(obj.component)`
           )
     }
```

---

## What is the difference between constructor and getInitialState?

You should initialize state in the constructor when using ES6 classes, and `getInitialState()` method when using `React.createClass()`.

**Using ES6 classes:**

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
    };
  }
}
```

**Using `React.createClass()`:**

```javascript
const MyComponent = React.createClass({
  getInitialState() {
    return {
      /* initial state */
    };
  },
});
```

**Note:** `React.createClass()` is deprecated and removed in React v16. Use plain JavaScript classes instead.

---

## Can you force a component to re-render without calling setState?

By default, when your component's state or props change, your component will re-render. If your `render()` method depends on some other data, you can tell React that the component needs re-rendering by calling `forceUpdate()`.

```javascript
component.forceUpdate(callback);
```

---

### How to update a component every second?

You need to use `setInterval()` to trigger the change, but you also need to clear the timer when the component unmounts to prevent errors and memory leaks.

```javascript
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
```

---
