---
sidebar_position: 0
sidebar_label: 在 CSS 中引入字体
---

# 在 CSS 中引入字体

可以在 CSS 中引入自定义字体，控制字体显示效果。

## JetBrains Mono 字体

```css title=".css"
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");
/* 代码块、行内代码 */
code {
  color: var(--ifm-color-primary);
  /* 使用 JetBrains Mono 字体 */
  font-family: "JetBrains Mono", monospace !important;
  padding-left: 5px;
  padding-right: 5px;
}
```

🔗 [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono)<br/>
🔗 [JetBrains Mono 官方网址](https://www.jetbrains.com/zh-cn/lp/mono/)