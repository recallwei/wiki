---
title: 基本特性
---

Docusaurus Markdown 具有 Markdown 的基本特性以及其独特的额外特性。

## Front Matter

Markdown documents have metadata at the top called Front Matter:

```md
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---

## Markdown heading

Markdown text with [links](./hello.md)
```

## 粗体

这是**加粗**的文本。

```md
**文本内容**
```

## 链接

这是 [GitHub](https://github.com/recallwei/) 链接。

```
[链接文字](链接地址)
```

## 图片

![Docusaurus Logo](../../../../static/img/docusaurus.png)

```md
![Docusaurus Logo](../../../static/img/docusaurus.png)
```

## 列表/子列表

- 一级列表
- 一级列表 2
  - 二级列表
  - 二级列表 2
    - 三级列表
    - 三级列表 2
      - 四级列表

```md
- 一级列表
- 一级列表 2
  - 二级列表
  - 二级列表 2
    - 三级列表
    - 三级列表 2
      - 四级列表
```

## 行内代码

`inline code`

```md
`inline code`
```
