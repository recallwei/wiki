---
title: Build
---

## 升级 Docusaurus 至最新版本

```bash
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/theme-live-codeblock@latest @docusaurus/eslint-plugin@latest
```

## 2022.04.24 🐞 Build Error : Docusaurus found broken links

Problem ：`yarn run build` 构建失败，项目 **.md 文件** 中存在**失效的 URL**  
Solution A：替换失效 URL。  
Solution B：在 **docusaurus.config.js** 配置 **onBrokenLinks** 属性(未采用)。

```text title="错误信息"
[ERROR] Unable to build website for locale en.
[ERROR] Error: Docusaurus found broken links!

Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.

Exhaustive list of all broken links found:

- On source page path = /:
   -> linking to /docs/intro

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## 外部访问开发服务器

### `yarn start --host 0.0.0.0`

使用 `--host 0.0.0.0` 指定绑定的主机，以便开发服务器被外部访问。

**`ipconfig`** (Windows) 或者 **`ifconfig`** (Mac) 查询本机 IP 地址（例如：**192.168.0.100**），再通过 **`192.168.0.100:3000`** 访问该站点。

### `yarn run serve`

执行 **`yarn run build`** 构建项目，再执行 **`yarn run serve`**，该站点会暴露在 **`localhost:3000`**。

**`ipconfig`** (Windows) 或者 **`ifconfig`** (Mac) 查询本机 IP 地址（例如：**192.168.0.100**），再通过 **`192.168.0.100:3000`** 访问该站点。
