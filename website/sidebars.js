/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  frontend: [
    //Home
    {
      type: "doc",
      id: "front-end/front-end-home",
      label: "Front-end",
    },
    // Markdown
    {
      type: "category",
      label: "Markdown",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/markdown/markdown",
      },
      items: [],
    },
    // HTML
    {
      type: "category",
      label: "HTML",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/html/html",
      },
      items: [
        {
          type: "doc",
          id: "front-end/html/elements",
          label: "标签",
        },
      ],
    },
    // CSS
    {
      type: "category",
      label: "CSS",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/css/css",
      },
      items: [
        {
          type: "category",
          label: "Selectors",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/css/selectors/selectors",
          },
          items: [
            {
              type: "doc",
              id: "front-end/css/selectors/simple-selectors",
              label: "Simple Selectors",
            },
          ],
        },
        {
          type: "category",
          label: "Flex Box",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/css/flex-box/flex-box",
          },
          items: [
            {
              type: "doc",
              id: "front-end/css/flex-box/flex",
              label: "Flex",
            },
          ],
        },
        {
          type: "category",
          label: "Font",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/css/font/font",
          },
          items: [
            {
              type: "doc",
              id: "front-end/css/font/import-font-in-css",
              label: "在 CSS 中引入字体",
            },
            {
              type: "doc",
              id: "front-end/css/font/display",
              label: "文本显示",
            },
          ],
        },
        {
          type: "category",
          label: "Properties",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/css/properties/properties",
          },
          items: [
            {
              type: "doc",
              id: "front-end/css/properties/white-space",
              label: "white-space",
            },
            {
              type: "doc",
              id: "front-end/css/properties/box-shadow",
              label: "box-shadow",
            },
          ],
        },
        {
          type: "category",
          label: "Components",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/css/components/components",
          },
          items: [
            {
              type: "doc",
              id: "front-end/css/components/card",
              label: "Card",
            },
            {
              type: "doc",
              id: "front-end/css/components/ribbon",
              label: "Ribbon",
            },
          ],
        },
      ],
    },
    // Javascript
    {
      type: "category",
      label: "Javascript",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/javascript/javascript",
      },
      items: [
        {
          type: "category",
          label: "Value Types",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/javascript/value-types/value-types",
          },
          items: [
            {
              type: "doc",
              id: "front-end/javascript/value-types/number",
              label: "Number",
            },
            {
              type: "doc",
              id: "front-end/javascript/value-types/string",
              label: "String",
            },
            {
              type: "doc",
              id: "front-end/javascript/value-types/type-conversion",
              label: "Type Conversion",
            },
          ],
        },
        {
          type: "category",
          label: "Reference Types",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/javascript/reference-types/reference-types",
          },
          items: [
            {
              type: "doc",
              id: "front-end/javascript/reference-types/array",
              label: "Array",
            },
          ],
        },
        {
          type: "category",
          label: "Solutions",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/javascript/solutions/solutions",
          },
          items: [
            {
              type: "doc",
              id: "front-end/javascript/solutions/get-document-file-type",
              label: "获取文件类型",
            },
          ],
        },
      ],
    },
    // React
    {
      type: "category",
      label: "React",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/react/react",
      },
      items: [
        {
          type: "category",
          label: "DOM",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/react/dom/dom",
          },
          items: [
            {
              type: "doc",
              id: "front-end/react/dom/dom-elements",
              label: "DOM 元素",
            },
          ],
        },
        {
          type: "category",
          label: "常见问题",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/react/common/common",
          },
          items: [
            {
              type: "doc",
              id: "front-end/react/common/download-file",
              label: "下载文件",
            },
            {
              type: "doc",
              id: "front-end/react/common/import-image",
              label: "引入图片",
            },
          ],
        },
        {
          type: "category",
          label: "Experience",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/react/experience/experience",
          },
          items: [
            {
              type: "doc",
              id: "front-end/react/experience/component-design",
              label: "组件设计",
            },
          ],
        },
      ],
    },
    // Docusaurus
    {
      type: "category",
      label: "Docusaurus",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/docusaurus/docusaurus",
      },
      items: [
        {
          type: "doc",
          id: "front-end/docusaurus/build",
          label: "Build",
        },
        {
          type: "category",
          label: "Markdown Feature",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/docusaurus/markdown-feature/markdown-feature",
          },
          items: [
            {
              type: "doc",
              id: "front-end/docusaurus/markdown-feature/basic-feature",
              label: "基本特性",
            },
            {
              type: "doc",
              id: "front-end/docusaurus/markdown-feature/code-block",
              label: "代码块",
            },
            {
              type: "doc",
              id: "front-end/docusaurus/markdown-feature/admonitions",
              label: "Admonitions",
            },
            {
              type: "doc",
              id: "front-end/docusaurus/markdown-feature/mdx-and-react-components",
              label: "React Components",
            },
          ],
        },
        {
          type: "doc",
          id: "front-end/docusaurus/swizzling",
          label: "Swizzling",
        },
        {
          type: "doc",
          id: "front-end/docusaurus/rename-project-name",
          label: "更改项目名称",
        },
        {
          type: "doc",
          id: "front-end/docusaurus/tailwind-css-integration",
          label: "集成 TailwindCSS v3",
        },
      ],
    },
    // Wechat Mini Program
    {
      type: "category",
      label: "Wechat Mini Program",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/wechat-mini-program/wechat-mini-program",
      },
      items: [
        {
          type: "doc",
          id: "front-end/wechat-mini-program/configuration",
          label: "Configuration",
        },
        {
          type: "doc",
          id: "front-end/wechat-mini-program/components",
          label: "Components",
        },
        {
          type: "category",
          label: "WXML",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/wechat-mini-program/wxml/wxml",
          },
          items: [
            {
              type: "doc",
              id: "front-end/wechat-mini-program/wxml/data",
              label: "数据绑定",
            },
          ],
        },
        {
          type: "category",
          label: "API",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/wechat-mini-program/api/api",
          },
          items: [
            {
              type: "doc",
              id: "front-end/wechat-mini-program/api/clipboard",
              label: "剪切板",
            },
            {
              type: "doc",
              id: "front-end/wechat-mini-program/api/share",
              label: "分享",
            },
          ],
        },
        {
          type: "category",
          label: "Solutions",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/wechat-mini-program/solutions/solutions",
          },
          items: [
            {
              type: "doc",
              id: "front-end/wechat-mini-program/solutions/remove-style-of-button",
              label: "移除 Button 原生样式",
            },
          ],
        },
      ],
    },
    // npm
    {
      type: "category",
      label: "npm",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/npm/npm",
      },
      items: [
        {
          type: "doc",
          id: "front-end/npm/patch-package",
          label: "patch-package",
        },
      ],
    },
    // IDE
    {
      type: "category",
      label: "IDE",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/ide/ide",
      },
      items: [
        {
          type: "category",
          label: "Visual Studio Code",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "front-end/ide/visual-studio-code/visual-studio-code",
          },
          items: [
            {
              type: "doc",
              id: "front-end/ide/visual-studio-code/git",
              label: "Git",
            },
            {
              type: "doc",
              id: "front-end/ide/visual-studio-code/short-cuts",
              label: "Shortcuts",
            },
          ],
        },
      ],
    },
    // Design
    {
      type: "category",
      label: "Design",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "front-end/design/design",
      },
      items: [],
    },
  ],
  backend: [
    //Home
    {
      type: "doc",
      id: "back-end/back-end-home",
      label: "Back-end",
    },
  ],
  cs: [
    //Home
    {
      type: "doc",
      id: "cs/cs-home",
      label: "CS",
    },
    // Network
    // {
    //   type: "category",
    //   label: "Network",
    //   collapsible: true,
    //   collapsed: true,
    //   link: {
    //     type: "generated-index",
    //     title: "Network",
    //   },
    //   items: [],
    // },
  ],
};

// Category Template
// {
//   type: "category",
//   label: "",
//   collapsible: true,
//   collapsed: true,
//   link: {
//     type: "generated-index",
//     title: "",
//   },
//   items: [],
// },

// Doc Template
// {
//    type: "doc",
//    id: "",
//    label: "",
// },

module.exports = sidebars;
