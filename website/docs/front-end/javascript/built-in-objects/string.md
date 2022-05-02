---
title: String
---

## Property

### Length

[ Read-only ]
该属性返回字符串中字符编码单元的数量。

JavaScript 使用 UTF-16 编码，该编码使用一个 16 比特的编码单元来表示大部分常见的字符，使用两个代码单元表示不常用的字符。因此 length 返回值可能与字符串中实际的字符数量不相同。

空字符串的 length 为 0。

## Method

### split

`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。
