---
id: refs
title: 'Refs'
sidebar_label: 'Refs'
---

### What is the use of refs?

The _ref_ is used to return a reference to the element. They _should be avoided_ in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

---

### How to create refs?

#### There are two approaches

1. This is a recently added approach. _Refs_ are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use _refs_ throughout the component, just assign the _ref_ to the instance property within constructor.

```jsx harmony
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

2. You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element accessed as follows,

```jsx harmony
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.txtSearch = null;
    this.state = {term: ''};
    this.setInputSearchRef = (e) => {
      this.txtSearch = e;
    };
  }
  onInputChange(event) {
    this.setState({term: this.txtSearch.value});
  }
  render() {
    return (
      <input
        value={this.state.term}
        onChange={this.onInputChange.bind(this)}
        ref={this.setInputSearchRef}
      />
    );
  }
}
```

You can also use _refs_ in function components using **closures**. **Note**: You can also use inline ref callbacks even though it is not a recommended approach

---

### What are forward refs?

_Ref forwarding_ is a feature that lets some components take a _ref_ they receive, and pass it further down to a child.

```jsx harmony
const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>{'Forward Ref'}</ButtonElement>;
```

---

### Which is preferred option with in callback refs and findDOMNode()?

It is preferred to use _callback refs_ over `findDOMNode()` API. Because `findDOMNode()` prevents certain improvements in React in the future.

The **legacy** approach of using `findDOMNode`:

```javascript
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />;
  }
}
```

---

### The recommended approach is:

```javascript
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.node = createRef();
  }
  componentDidMount() {
    this.node.current.scrollIntoView();
  }

  render() {
    return <div ref={this.node} />;
  }
}
```

---

### Why are String Refs legacy?

If you worked with React before, you might be familiar with an older API where the `ref` attribute is a string, like `ref={'textInput'}`, and the DOM node is accessed as `this.refs.textInput`. We advise against it because _string refs have below issues_, and are considered legacy. String refs were **removed in React v16**.

1. They _force React to keep track of currently executing component_. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.
2. They are _not composable_ — if a library puts a ref on the passed child, the user can't put another ref on it. Callback refs are perfectly composable.
3. They _don't work with static analysis_ like Flow. Flow can't guess the magic that framework does to make the string ref appear on `this.refs`, as well as its type (which could be different). Callback refs are friendlier to static analysis.
4. It doesn't work as most people would expect with the "render callback" pattern (e.g. `<DataGrid renderRow={this.renderRow} />`)

```jsx harmony
class MyComponent extends Component {
  renderRow = (index) => {
    // This won't work. Ref will get attached to DataTable rather than MyComponent:
    return <input ref={'input-' + index} />;

    // This would work though! Callback refs are awesome.
    return <input ref={(input) => (this['input-' + index] = input)} />;
  };

  render() {
    return <DataTable data={this.props.data} renderRow={this.renderRow} />;
  }
}
```
