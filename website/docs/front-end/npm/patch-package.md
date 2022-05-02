---
title: patch-package
---

在安装 npm 包的时候，总是会有些 🐞Bug 或是某些定制化场景，可以修改其代码将其应用到生产环境。需要修改 **node_modules** 时，可以使用 **patch-package** 包临时为某个 node 包打补丁。

## 设置

在 **package.json** 中添加如下脚本：

```git
 "scripts": {
+ "postinstall": "patch-package"
 }
```

## 安装 patch-package

```bash
npm i patch-package
```

## 修改 node_modules 中的文件

例如：node_modules/**some-package**/brokenFile.js。

## 生成 .patch 文件

**`cd`** 到根目录下，执行如下命令生成 **.patch** 补丁文件。

```bash
npx patch-package some-package
```

**patch-package** 会将当前 **node_modules** 下的源码与原始源码进行 `git diff`，并在项目根目录下生成一个 patch 补丁文件，生成后的文件位于根目录下 **/ClientApp/patch**。

## 发布到生产、应用补丁文件

```bash
npm i
```

执行完 `npm i` 后会自动执行 script 里的 `npm postinstall`。
