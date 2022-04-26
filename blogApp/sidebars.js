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
        type: "generated-index",
        title: "Markdown",
      },
      items: [
        {
          type: "category",
          label: "Docusaurus Markdown",
          collapsible: true,
          collapsed: true,
          link: {
            type: "generated-index",
            title: "Docusaurus Markdown",
          },
          items: [
            {
              type: "doc",
              id: "front-end/markdown/docusaurus-markdown/basic-feature",
              label: "基本特性",
            },
            {
              type: "doc",
              id: "front-end/markdown/docusaurus-markdown/code-block",
              label: "代码块",
            },
            {
              type: "doc",
              id: "front-end/markdown/docusaurus-markdown/admonitions",
              label: "Admonitions",
            },
            {
              type: "doc",
              id: "front-end/markdown/docusaurus-markdown/mdx-and-react-components",
              label: "React Components",
            },
          ],
        },
      ],
    },
    // HTML
    // {
    //   type: "category",
    //   label: "HTML",
    //   collapsible: true,
    //   collapsed: true,
    //   link: {
    //     type: "generated-index",
    //     title: "HTML",
    //   },
    //   items: [],
    // },
    // CSS
    {
      type: "category",
      label: "CSS",
      collapsible: true,
      collapsed: true,
      link: {
        type: "generated-index",
        title: "CSS",
      },
      items: [
        {
          type: "category",
          label: "Font",
          collapsible: true,
          collapsed: true,
          link: {
            type: "generated-index",
            title: "Font",
          },
          items: [
            {
              type: "doc",
              id: "front-end/css/font/import-font-in-css",
              label: "在 CSS 中引入字体",
            },
          ],
        },
      ],
    },
    // Javascript
    // {
    //   type: "category",
    //   label: "Javascript",
    //   collapsible: true,
    //   collapsed: true,
    //   link: {
    //     type: "generated-index",
    //     title: "Javascript",
    //   },
    //   items: [],
    // },
    // React
    {
      type: "category",
      label: "React",
      collapsible: true,
      collapsed: true,
      link: {
        type: "generated-index",
        title: "React",
      },
      items: [
        {
          type: "category",
          label: "常见问题",
          collapsible: true,
          collapsed: true,
          link: {
            type: "generated-index",
            title: "常见问题",
          },
          items: [
            {
              type: "doc",
              id: "front-end/react/common/download-file",
              label: "下载文件",
            },
          ],
        },
        {
          type: "category",
          label: "Experience",
          collapsible: true,
          collapsed: true,
          link: {
            type: "generated-index",
            title: "Experience",
          },
          items: [
            {
              type: "doc",
              id: "front-end/react/experience/component-design",
              label: "组件设计",
            },
          ],
        },
        {
          type: "category",
          label: "Docusaurus",
          collapsible: true,
          collapsed: true,
          link: {
            type: "generated-index",
            title: "Docusaurus",
          },
          items: [
            {
              type: "doc",
              id: "front-end/react/docusaurus/build",
              label: "Build",
            },
          ],
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
        type: "generated-index",
        title: "Wechat Mini Program",
      },
      items: [
        {
          type: "doc",
          id: "front-end/wechat-mini-program/configuration",
          label: "configuration",
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
        type: "generated-index",
        title: "npm",
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
        type: "generated-index",
        title: "IDE",
      },
      items: [
        {
          type: "category",
          label: "Visual Studio Code",
          collapsible: true,
          collapsed: true,
          link: {
            type: "generated-index",
            title: "Visual Studio Code",
          },
          items: [
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
    // {
    //   type: "category",
    //   label: "Design",
    //   collapsible: true,
    //   collapsed: true,
    //   link: {
    //     type: "generated-index",
    //     title: "Design",
    //   },
    //   items: [],
    // },
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
