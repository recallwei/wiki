# 文本显示

## 文本过长问题

div 内显示固定行数的文本，超出部分用省略号显示。

```css
.singleLineText {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.multiLineText {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

## 文本换行问题
