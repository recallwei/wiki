---
title: 代码块
---

## 语法高亮

code block 语法高亮基于 **[prism.js](https://prismjs.com/#supported-languages)**，Docusaurus 支持的常用语言：**[includeLangs](https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js)**。

````md title="hello-world.md"
```javascript title="hello-world.js"
console.log("Hello World!");
```
````

```javascript title="hello-world.js"
console.log("Hello World!");
```

## 行高亮

code block 行高亮基于 **[parse-number-range](https://www.npmjs.com/package/parse-numeric-range)**，要高亮多行内容，请使用半角逗号来分隔行号，或使用范围语法来选择多行代码块。

````md title="MyComponent.md"
```jsx {1,4-6,11} title="MyComponent.js"
import React from "react";

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```
````

```jsx {1,4-6,11} title="MyComponent.js"
import React from "react";

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```
