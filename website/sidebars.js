/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  frontend: [
    // Home
    {
      type: "doc",
      id: "front-end-home",
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
        id: "markdown/index",
      },
      items: [
        {
          type: "doc",
          id: "markdown/embed-html",
          label: "Embed HTML",
        },
        {
          type: "doc",
          id: "markdown/headings",
          label: "Headings",
        },
        {
          type: "doc",
          id: "markdown/paragraphs",
          label: "Paragraphs",
        },
        {
          type: "doc",
          id: "markdown/line-breaks",
          label: "Line Breaks",
        },
      ],
    },
    // HTML
    {
      type: "category",
      label: "HTML",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "html/index",
      },
      items: [
        {
          type: "doc",
          id: "html/elements",
          label: "Elements",
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
        id: "css/index",
      },
      items: [
        {
          type: "category",
          label: "Selectors",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "css/selectors/index",
          },
          items: [
            {
              type: "doc",
              id: "css/selectors/simple-selectors",
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
            id: "css/flex-box/index",
          },
          items: [
            {
              type: "doc",
              id: "css/flex-box/flex",
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
            id: "css/font/index",
          },
          items: [
            {
              type: "doc",
              id: "css/font/import",
              label: "Import",
            },
            {
              type: "doc",
              id: "css/font/display",
              label: "Display",
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
            id: "css/properties/index",
          },
          items: [
            {
              type: "doc",
              id: "css/properties/white-space",
              label: "white-space",
            },
            {
              type: "doc",
              id: "css/properties/box-shadow",
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
            id: "css/components/index",
          },
          items: [
            {
              type: "doc",
              id: "css/components/card",
              label: "Card",
            },
            {
              type: "doc",
              id: "css/components/ribbon",
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
        id: "javascript/index",
      },
      items: [
        {
          type: "category",
          label: "Value Types",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "javascript/value-types/index",
          },
          items: [
            {
              type: "doc",
              id: "javascript/value-types/number",
              label: "Number",
            },
            {
              type: "doc",
              id: "javascript/value-types/string",
              label: "String",
            },
            {
              type: "doc",
              id: "javascript/value-types/type-conversion",
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
            id: "javascript/reference-types/index",
          },
          items: [
            {
              type: "doc",
              id: "javascript/reference-types/array",
              label: "Array",
            },
          ],
        },
        {
          type: "category",
          label: "Operators",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "javascript/operators/index",
          },
          items: [
            {
              type: "doc",
              id: "javascript/operators/bitwise-not",
              label: "Bitwise Not(~)",
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
            id: "javascript/solutions/index",
          },
          items: [
            {
              type: "doc",
              id: "javascript/solutions/get-file-type",
              label: "Get File Type",
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
        id: "react/index",
      },
      items: [
        {
          type: "category",
          label: "DOM",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "react/dom/index",
          },
          items: [
            {
              type: "doc",
              id: "react/dom/dom-elements",
              label: "DOM 元素",
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
            id: "react/solutions/index",
          },
          items: [
            {
              type: "doc",
              id: "react/solutions/download-file",
              label: "Download File",
            },
            {
              type: "doc",
              id: "react/solutions/import-image",
              label: "Import Image",
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
            id: "react/experience/index",
          },
          items: [
            {
              type: "doc",
              id: "react/experience/component-design",
              label: "Component Design",
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
        id: "docusaurus/index",
      },
      items: [
        {
          type: "doc",
          id: "docusaurus/build",
          label: "Build",
        },
        {
          type: "category",
          label: "Markdown Feature",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "docusaurus/markdown-feature/index",
          },
          items: [
            {
              type: "doc",
              id: "docusaurus/markdown-feature/basic-feature",
              label: "Basic Feature",
            },
            {
              type: "doc",
              id: "docusaurus/markdown-feature/code-block",
              label: "Code Block",
            },
            {
              type: "doc",
              id: "docusaurus/markdown-feature/admonitions",
              label: "Admonitions",
            },
            {
              type: "doc",
              id: "docusaurus/markdown-feature/mdx-and-react-components",
              label: "React Components",
            },
          ],
        },
        {
          type: "doc",
          id: "docusaurus/swizzling",
          label: "Swizzling",
        },
        {
          type: "doc",
          id: "docusaurus/rename-project-name",
          label: "Rename Project Name",
        },
        {
          type: "doc",
          id: "docusaurus/integrate-tailwind-css",
          label: "Integrate TailwindCSS",
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
        id: "wechat-mini-program/index",
      },
      items: [
        {
          type: "doc",
          id: "wechat-mini-program/configuration",
          label: "Configuration",
        },
        {
          type: "doc",
          id: "wechat-mini-program/components",
          label: "Components",
        },
        {
          type: "category",
          label: "WXML",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "wechat-mini-program/wxml/index",
          },
          items: [
            {
              type: "doc",
              id: "wechat-mini-program/wxml/data-binding",
              label: "Data Binding",
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
            id: "wechat-mini-program/api/index",
          },
          items: [
            {
              type: "doc",
              id: "wechat-mini-program/api/clipboard",
              label: "Clipboard",
            },
            {
              type: "doc",
              id: "wechat-mini-program/api/share",
              label: "Share",
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
            id: "wechat-mini-program/solutions/index",
          },
          items: [
            {
              type: "doc",
              id: "wechat-mini-program/solutions/remove-style-of-button",
              label: "Remove Style Of Button",
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
        id: "npm/index",
      },
      items: [
        {
          type: "doc",
          id: "npm/patch-package",
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
        id: "ide/index",
      },
      items: [
        {
          type: "category",
          label: "Visual Studio Code",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "ide/visual-studio-code/index",
          },
          items: [
            {
              type: "doc",
              id: "ide/visual-studio-code/git",
              label: "Git",
            },
            {
              type: "doc",
              id: "ide/visual-studio-code/shortcuts",
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
        id: "design/index",
      },
      items: [],
    },
  ],
  backend: [
    //Home
    {
      type: "doc",
      id: "back-end-home",
      label: "Back-end",
    },
  ],
};
module.exports = sidebars;
