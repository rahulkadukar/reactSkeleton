# reactSkeleton
React Skeleton

#### Installation

First install the basic react package and react-dom

```bash
  npm install --save react react-dom
```

Install the dev dependencies

```bash
  npm install --save-dev 
    babel-core babel-loader babel-preset-env babel-preset-react
    css-loader style-loader html-webpack-plugin webpack webpack-dev-server
```

#### Important points
* Define propTypes to understand the interface of the Component
* Stateless Components can be defined using Functions rather than Classes

#### The this keyword
There are 4 types of binding
* Implicit binding
* Explicit binding (call, apply, bind)
* new binding (Constructor function)
* window binding (no this specified)

```javascript
  var sayName = function(lang1, lang2, lang3) {
    console.log(this.name + ':' + lang1);
  }

  var meVar = {
    name: 'Rahul'
  };

  var lang = ['C++', 'JavaScript', 'Python'];

  // Call
  // Calls function with specific context, arguments passed individually
  sayName.call(meVar, lang[0], lang[1], lang[2]);

  // Apply
  // Same as above but arguments can be passed in an array
  sayName.apply(meVar, lang);

  // Bind
  // Same as call but instead of invoking the function, returns a function
  let newFn = sayName.bind(meVar, lang[0], lang[1], lang[2]);
  newFn();
```
