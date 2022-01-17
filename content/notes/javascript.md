---
title: Javascript
date: "2020-12-17"
template: "note"
draft: false
slug: "javascript"
note: "Javascript"
---

## var, let, const

- var: global variable, scoping variable
- let: scoping variable
- const:
## call, apply, bind

## `this`
[Reference](https://zhuanlan.zhihu.com/p/23804247)

```javascript
const obj = {
  sing: function() {
      console.log('a', this);
      const anotherFunc = function() {
          console.log('b', this);
      }
      anotherFunc();
    }
};

obj.sing();
// obj
// window (if this is undefined/null, it will by default point to window in browser)

class Foo {
  print = () => {
    console.log(this.x);
  }

  constructor() {
      this.x = 1;
  }
}

let foo = new Foo();
foo.print.call({x: 2});
// 1
```

### Function Invocation Pattern
### Method Invocation Pattern
### Constructor Pattern

### Apply Pattern

### Implicit Binding

When JS is not executed in strict mode, it binds the function to the Object making the function call - this behaviour is called Implicit Binding

### Explicit Binding

## Events:

- capturing (trickling): from top(outermost) to bottom (innermost)
- bubbling: from bottom (innermost) to top(outermost)

```javascript
addEventListner(type, listener, useCapture)
```

> Bubbling by default, set `true` for useCapture to enable capturing

It's used to determine the exection order of events
```html
<div id="outer">
  <div id="middle">
    <a href="" id="inner" >click</a>
  </div>
</div>
```

```javascript
var outer = document.getElementById('outer');
var middle = document.getElementById('middle');
var inner = document.getElementById('inner');

outer.addEventListener('click',
  () => console.log('trigger outer div'), true);
middle.addEventListener('click',
  () => console.log('trigger middle div'), true);
inner.addEventListener('click',
  () => console.log('trigger inner button'), true);
```

Since the `useCapture` is `true`, it will trigger events from outermost to innermost on clicking the anchor tag.

```javascript
// output
trigger outer div
trigger middle div
```

### e.preventDefault
> Why was innermost not trigged here?

The event chain is interrupted because an empty anchor tag would trigger redirection to the current page by default. `e.stopPreventDefault` can be used here to bypass the default behavior.

```javascript
inner.addEventListener('click',
  (e) => {
    e.preventDefault();
    console.log('trigger inner button');
  }, true));

//  and the output will be
trigger outer div
trigger middle div
trigger middle button
```

### e.stopPropgagtion:
> What if we want to click outer div but prevent midde div, inner button be triggered?

By using `e.stopPropgagtion`, we can stop the event chain.
```javascript
outer.addEventListener('click',
  (e) => {
    e.stopPropgagtion();
    console.log('trigger outer div');
  }, true));

//  and the output will be
trigger outer div
```


### Event Delegation

- Centralization (which makes it possible to monitor events)
- Tracking (from whom the event came)
- Filtering

Utilizing bubbling to delegate events, ` target` is used to identify where the event was triggered.
The benefit is that we only have one event listener to track, which can potentially increase the performance.

Note: `currentTarget` is where you bind the event listener

```javascript
const outer = document.getElementById('outer');
outer.addEventListener('click', e=>{
  switch(e.target.id){
    case 'middle':
      console.log('trigger middle div'), true);
      break;
    case 'inner':
      console.log('trigger inner div'), true);
      break;
    default:
      console.log('trigger outer div'), true);
      break;
  }
})
```

-  [Reference](https://segmentfault.com/a/1190000008227026)

### dispatchEvent

## import/export
```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";

var promise = import("module-name");
```

- `defaultExport` Name that will refer to the default export from the module.
- `module-name`: The module to import from. This is often a relative or absolute path name to the .js file containing the module. Certain bundlers may permit or require the use of the extension; check your environment. Only single quoted and double quoted Strings are allowed.
- `name`: Name of the module object that will be used as a kind of namespace when referring to the imports.
- `exportN`: Name of the exports to be imported.
- `aliasN`: Names that will refer to the named imports.



```javascript

// create 2d array in javascript
const grid = Array(10).fill(0).map(() => Array(10).fill(0))

s = 'abc123'
s.charAt(i) // check get index i
s.charAt(4).match(/[0-9]/) // check if is digit
s.repeat(n) // mutliple s by n times

['a', 'b'].join(' ') // a b
'a' + 'b' // ab

queue = []
queue.shift()
queue.psuh(3)

// iterate thru array with iterator
for (const word of wordDict) { }

[{ a:2 }, { a: 1 }, {a: 3}].sort((a,b) => { if (a.a < b.a) { return -1 } else { return 0 }  })
// [{ a: 1 }, { a: 2 }, { a: 3 }]
```