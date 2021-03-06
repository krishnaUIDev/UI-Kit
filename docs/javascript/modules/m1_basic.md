---
id: module1_basic
title: Basic is the foundation of all programming language 😇
sidebar_label: 'Basics'
---

import BulletSentence from '../../../src/components/bulletSentence/bulletSentnce.tsx';

:::note Questions 🤔

1. `let` vs `const` vs `var`
2. What is `Temporal Dead Zone` or `TDZ`? How that Occur?
3. How `let` work in for a loop when let doesn't allow reassignment?
4. is `var` Dead? What should I use?
5. How `let` and `const` is scoped in Js?
6. What is the purpose of `use strict`?
7. What does the double negation operator `!!` do?
8. `==` vs `===`
9. What are the falsy values in js
10. What is `Coercion` with an example :::

## A Story of `var`, `let` and `const`

---

<BulletSentence keyword="var">An old school technique to declare a variable</BulletSentence> <BulletSentence keyword="let">An alternative to var and its a modern way to declare any variable</BulletSentence> <BulletSentence keyword="const">Const values never gonna be replaced once it's declared</BulletSentence>

### The Story of Var 🌈

A variable can be declared as `var` or `let`. But even if we declare the variable with let, var is beast in it own way

<!-- <GlowBullet highlightWord="var"> has no block scope meaning it can be accessed globally (it's subjective to strict mode) </GlowBullet> -->

🔸 `var` has no block scope meaning it can be accessed globally _(its subjective to strict mode)_

```ts
// var accessibility
if (true) {
  var superHero = 'Super Man 🦸🏻‍♂️';
}

console.log(superHero); // Super Man 🦸🏻‍♂️
// The Variable scope still present outside the function block as well

// let accessibility
if (true) {
  let superHero = 'Super Man 🦸🏻‍♂️';
}

console.log(superHero); // Error ❌, undefined
// let scope is restricted to the block
```

If a code block is inside a function then the scope will remain to the function level

```js
function IAmIronMan() {
  if (true) {
    var isHeIronMan = true;
  }
  console.log(isHeIronMan);
}

IAmIronMan(); // true ✅
console.log(isHeIronMan); // ReferenceError: isHeIronMan is not defined
```

If `var` declared outside any function or block that instance will be assigned to the global object. which means a `window` object inside the browser and `global` object in the node

🔸 `var` do tolerate re-declaration

```js
// var ignore and replace the old value with a new one
var superHero = 'Iron Man';
var superHero = 'Batman'; // Works pretty fine

// let is very arrogant
let superHero = 'Iron Man';
let superHero = 'Batman'; // SyntaxError: Identifier 'superHero' has already been declared
```

🔸 `var` variable(s) can be declared below their use

```js
// Example 1
function whoAmI() {
  superHero = 'Iron Man';
  console.log(superHero);
  var superHero; // declaration is done after initialization 🛎
}

// Example 2
function whoAmI() {
  superHero = 'Hulk';
  if (true) {
    var superHero; // declaration is done after initialization 🛎
  }
  console.log(superHero);
}
```

This behavior is called `Hoisting` (Raising) where all `var` is hoisted at the global context

:::caution Note 📝

- the Only declaration can be Hoist, not an assignment
- During the execution, all the variable declaration will go at the top of the execution context :::

### `let` it go

🔸 **let** has a sensible scoping. Once the scope is declared the scope will remain in its block <br/> 🔸 **let** don't allow re-declaration

```js
let superHero = 'Iron Man';
let superHero = 'Batman'; // SyntaxError: Identifier 'superHero' has already been declared
```

🔸 If we declare variable with **let** it will not be attached to the global scope hence it will not be reachable outside the file <br/> 🔸 **let** in the loop can re-bind in each iteration making sure to reassign the value from the end of the previous iteration

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // print 0,1,2,3,4
}
```

What the heck 🤯 how is that even working when let won't allow re-assignment 🤔

:::danger TBU Add behind the scene of for loop with let :::

### How about the `const`

🔸 **const** variables are immutable, once declare you cant change <br/> 🔸 Scope of the **const** variable will remain inside the block <br/> 🔸 **const** variables are not hoisted <br/> 🔸 we can't reach to the **const** by `this` keyword <br/> 🔸 If you declare `const` to an object you will not be able to delete that object rather you will be able to declare, reassign or even delete value of the constant object

```js
const marvelHero = {
  heroName: 'Iron Man',
  actorName: 'Robert, Jr.',
};

marvelHero = {}; // can't assign to marvelHero because its constant

marvelHero.characterName = 'Tony Stark'; // Assigning new property to an object

delete marvelHero.heroName; // Deleting { heroName: "Iron Man",}

console.log(marvelHero); // { actorName: "Robert, Jr.", characterName: "Tony Stark" }
```

:::info Pro Tip 💡 If we try to read or write `let` or `const` variable before its declaration and initialization an error will raise. This phenomenon is called `Temporal Dead Zone` or `TDZ` :::

## Hey I'm very strict 👮🏻‍♂️

---

In the ES6 module system, strict mode is turned on by default. `use strict` is a literal expression to enable strict mode in coding. This strict context prevents certain actions from being taken and throws more exceptions.

🔸In early javascript, it was allowed to use write code however we want

```js
year = 2020;
console.log(year); // 2020, print the result even if you don't declare
```

but when you use strict mode at the top of the strict it's not possible to write code however we want

```js
'use strict';
year = 2020;
console.log(year); // 'year' is not declared
```

🔸Strict mode will help to prevent the unexpected errors, exception which can arise during runtime of the application<br/> 🔸**use strict** is very helpful to avoid a conflict between variables. If we missed declaring it will notify a developer

### Some consideration of strict mode

🔸 Variables can’t be left undeclared <br/> 🔸 Function parameters must have unique names (or are considered syntax errors) <br/> 🔸 `with` keyword is forbidden <br/> 🔸 Errors are thrown on assignment to `read-only` properties <br/> 🔸 Octal numbers like `00840` are syntax errors <br/> 🔸 Attempts to `delete` undeletable properties throw an error <br/> 🔸 delete prop is a syntax error, instead of assuming delete global[prop] <br/> 🔸 `eval` doesn’t introduce new variables into its surrounding scope <br/> 🔸 `eval` and `arguments` can’t be bound or assigned to <br/> 🔸 `arguments` doesn’t magically track changes to method parameters <br/> 🔸 `arguments.callee` throws a TypeError, no longer supported <br/> 🔸 `arguments.caller` throws a TypeError, no longer supported <br/> 🔸 Context passed as this in method invocations is not `boxed` (forced) into becoming an Object <br/> 🔸 No longer able to use `fn.caller` and `fn.arguments` to access the JavaScript stack <br/> 🔸 Reserved words (e.g protected, static, interface, etc) cannot be bound

:::caution Remember 🧠

- `use strict` should always declare at the top of a script to enable throughout the script or declare inside a block to enable only for a block. It won't work if we declare somewhere else
- There is no way to cancel a strict mode
- Strict mode can be eliminated from a modern scripting language, In fact, modern language and framework internally does it for you :::

## Untold story of an operator 🧑🏻‍🚀

---

Both == and === operator serve the same purpose which is to check the object equality

### `==` Operator

🔸== is operator is very loose. It only care about a content even if type is mismatch it wont boughter

```js
'4' == 4; // return  true
```

Behind the scene, javascript convert the string into a number and the equate them this is called `COERCION`

### `===` Operator

🔸 === is super strict. It want both content and type should equal

```js
'4' === 4; // return  false
'4' === '4'; // return true
```

:::info Recommendation Always prefer to use `===` instead of `==` because `==` is fickle and quickly leads to hidden bugs :::

Same goes for `!=` and `!==` which perform same things but negate

### `!!` Double negation Operator

🔸 Suppose you have an expression which gives result & if you want that result to be boolean (true/false) then `!!` is the solution <br/> 🔸 If you want to get `True` or `False` from Not a string, 0, empty string, undefined, NAN or something else<br/> 🔸 In reality, there is no `!!` operator in javascript. Its just one negates after another negate. It just negates the result then negate it again.<br/>

## List of falsy values in Javascript

| Falsey Value | Description |
| --- | --- |
| false | The keyword false |
| 0 | The number zero |
| \-0 | The number negative zero |
| 0n | BigInt, when used as a boolean, follows the same rule as a Number\. 0n is falsy\. |
| "" | Empty string value without space |
| null | Absence of any value |
| undefined | The primitive value where the value is not defined |
| NaN | Not a Number |
