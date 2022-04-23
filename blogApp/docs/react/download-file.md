---
sidebar_position: 0
sidebar_label: 下载文件（更新中）
---

# 下载文件

## Same-Origin URLs

## Cross-Origin URLs

```javascript
let download = (blobUrl, filename) => {
  getBlob(blobUrl).then((blob) => {
    saveAs(blob, filename);
  });
};

let getBlob = (url) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
};

let saveAs = (blob, filename) => {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement("a");
    const body = document.querySelector("body");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = "none";
    body.appendChild(link);
    link.click();
    body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
  }
};
```
