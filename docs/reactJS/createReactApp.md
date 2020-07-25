---
id: createReactApp
title: 'Create ReactApp'
sidebar_label: 'Create React App'
---

## What is CRA and its benefits?

The `create-react-app` CLI tool allows you to quickly create & run React applications with no configuration step.

#### Let's create Todo App using _CRA_:

```shell
    # Installation
    $ npm install -g create-react-app
    # Create new project
    $ create-react-app todo-app
    $ cd todo-app
    # Build, test and run
    $ npm run build
    $ npm run test
    $ npm start
```

#### It includes everything we need to build a React app:

1. React, JSX, ES6, and Flow syntax support.
2. Language extras beyond ES6 like the object spread operator.
3. Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
4. A fast interactive unit test runner with built-in support for coverage reporting.
5. A live development server that warns about common mistakes.
6. A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

---

### What are the approaches to include polyfills in your `create-react-app`?

There are approaches to include polyfills in create-react-app,

1. **Manual import from `core-js`:**

   Create a file called (something like) `polyfills.js` and import it into root `index.js` file. Run `npm install core-js` or `yarn add core-js` and import your specific required features.

   ```javascript
   import 'core-js/fn/array/find';
   import 'core-js/fn/array/includes';
   import 'core-js/fn/number/is-nan';
   ```

2. **Using Polyfill service:**

   Use the polyfill.io CDN to retrieve custom, browser-specific polyfills by adding this line to `index.html`:

   ```html
   <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes"></script>
   ```

   In the above script we had to explicitly request the `Array.prototype.includes` feature as it is not included in the default feature set.

---

### How to use https instead of http in create-react-app?

You just need to use `HTTPS=true` configuration. You can edit your `package.json` scripts section:

```json
    "scripts": {
       "start": "set HTTPS=true && react-scripts start"
    }
```

or just run `set HTTPS=true && npm start`

---

### How to avoid using relative path imports in create-react-app?

Create a file called `.env` in the project root and write the import path:

```shell
  NODE_PATH=src/app
```

After that restart the development server. Now you should be able to import anything inside `src/app` without relative paths.

---
