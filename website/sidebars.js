/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  frontend: [
    // Home
    {
      type: "doc",
      id: "front-end",
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
        {
          type: "doc",
          id: "html/character-entities",
          label: "Character Entities",
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
          type: "doc",
          id: "css/entities",
          label: "Entities",
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
          label: "List",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "css/list/index",
          },
          items: [
            {
              type: "doc",
              id: "css/list/list-style-type",
              label: "list-style-type",
            },
          ],
        },
        {
          type: "doc",
          id: "css/transform",
          label: "Transform",
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
        {
          type: "category",
          label: "Solutions",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "css/solutions/index",
          },
          items: [
            {
              type: "doc",
              id: "css/solutions/bootstrap",
              label: "Bootstrap",
            },
            {
              type: "doc",
              id: "css/solutions/svg",
              label: "修改 SVG 样式",
            },
          ],
        },
        {
          type: "category",
          label: "Sass",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "css/sass/index",
          },
          items: [
            {
              type: "doc",
              id: "css/sass/installation",
              label: "安装 Sass",
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
              label: "DOM Elements",
            },
          ],
        },
        {
          type: "category",
          label: "解决方案",
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
              label: "文件下载",
            },
            {
              type: "doc",
              id: "react/solutions/import-image",
              label: "图片导入",
            },
          ],
        },
        {
          type: "category",
          label: "最佳实践",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "react/best-practice/index",
          },
          items: [
            {
              type: "doc",
              id: "react/best-practice/component-design",
              label: "组件设计",
            },
          ],
        },
        {
          type: "category",
          label: "Redux",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "react/redux/index",
          },
          items: [
            {
              type: "doc",
              id: "react/redux/installation",
              label: "安装 Redux",
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
          type: "category",
          label: "Theme",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "docusaurus/theme/index",
          },
          items: [
            {
              type: "doc",
              id: "docusaurus/theme/customized-image",
              label: "Customized Image",
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
    // WeXin Mini Program
    {
      type: "category",
      label: "WeXin Mini Program",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "wexin-mini-program/index",
      },
      items: [
        {
          type: "doc",
          id: "wexin-mini-program/configuration",
          label: "Configuration",
        },
        {
          type: "doc",
          id: "wexin-mini-program/custom-components",
          label: "Custom Components",
        },
        {
          type: "category",
          label: "WXML",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "wexin-mini-program/wxml/index",
          },
          items: [
            {
              type: "doc",
              id: "wexin-mini-program/wxml/data-binding",
              label: "Data Binding",
            },
            {
              type: "doc",
              id: "wexin-mini-program/wxml/list-rendering",
              label: "列表渲染",
            },
            {
              type: "doc",
              id: "wexin-mini-program/wxml/template",
              label: "Template",
            },
          ],
        },
        {
          type: "doc",
          id: "wexin-mini-program/wxss",
          label: "WXSS",
        },
        {
          type: "category",
          label: "API",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "wexin-mini-program/api/index",
          },
          items: [
            {
              type: "doc",
              id: "wexin-mini-program/api/clipboard",
              label: "Clipboard",
            },
            {
              type: "doc",
              id: "wexin-mini-program/api/share",
              label: "Share",
            },
            {
              type: "doc",
              id: "wexin-mini-program/api/vibration",
              label: "振动反馈",
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
            id: "wexin-mini-program/solutions/index",
          },
          items: [
            {
              type: "doc",
              id: "wexin-mini-program/solutions/remove-style-of-button",
              label: "Remove Style Of Button",
            },
            {
              type: "doc",
              id: "wexin-mini-program/solutions/url-query-string-with-special-characters",
              label: "URL Query String With Special Characters",
            },
            {
              type: "doc",
              id: "wexin-mini-program/solutions/create-share-poster",
              label: "Create Share Poster",
            },
            {
              type: "doc",
              id: "wexin-mini-program/solutions/device-adaptation",
              label: "Device Adaptation",
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
          id: "npm/upgrade-node",
          label: "升级 Node 版本",
        },
        {
          type: "doc",
          id: "npm/upgrade-npm",
          label: "升级 npm 版本",
        },
        {
          type: "doc",
          id: "npm/n-module",
          label: "n module",
        },
        {
          type: "doc",
          id: "npm/patch-package",
          label: "patch-package",
        },
        {
          type: "category",
          label: "yarn",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "npm/yarn/index",
          },
          items: [
            {
              type: "doc",
              id: "npm/yarn/cli",
              label: "CLI",
            },
          ],
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
              label: "快捷键",
            },
            {
              type: "doc",
              id: "ide/visual-studio-code/proxy",
              label: "设置代理服务器",
            },
            {
              type: "doc",
              id: "ide/visual-studio-code/user-code-snippets",
              label: "用户代码片段",
            },
          ],
        },
        {
          type: "category",
          label: "WebStorm",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "ide/webstorm/index" },
          items: [
            { type: "doc", id: "ide/webstorm/environment", label: "搭建环境" },
          ],
        },
        {
          type: "category",
          label: "Wechat Devtools",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "ide/wechat-dev-tools/index",
          },
          items: [
            {
              type: "doc",
              id: "ide/wechat-dev-tools/settings",
              label: "Settings",
            },
          ],
        },
      ],
    },
    // OS
    {
      type: "category",
      label: "OS",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "os/index",
      },
      items: [
        {
          type: "category",
          label: "macOS",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "os/mac-os/index",
          },
          items: [
            {
              type: "doc",
              id: "os/mac-os/shortcuts",
              label: "快捷键",
            },
          ],
        },
        {
          type: "category",
          label: "Windows",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "os/windows/index",
          },
          items: [
            {
              type: "doc",
              id: "os/windows/expose-iis-in-lan",
              label: "将 IIS 暴露在局域网内",
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
      items: [
        {
          type: "category",
          label: "Figma",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "design/figma/index",
          },
          items: [
            {
              type: "doc",
              id: "design/figma/shortcuts",
              label: "快捷键",
            },
          ],
        },
      ],
    },
  ],
  backend: [
    // Home
    {
      type: "doc",
      id: "back-end",
      label: "Back-end",
    },
    // Network
    {
      type: "category",
      label: "Network",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "network/index",
      },
      items: [
        {
          type: "category",
          label: "DNS",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "network/dns/index",
          },
          items: [
            {
              type: "doc",
              id: "network/dns/flush-cache",
              label: "清除 DNS 缓存",
            },
          ],
        },
      ],
    },
    // Go
    {
      type: "category",
      label: "Go",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "go/index",
      },
      items: [
        {
          type: "doc",
          id: "go/environment",
        },
      ],
    },
    // Redis
    {
      type: "category",
      label: "Redis",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "redis/index",
      },
      items: [
        {
          type: "category",
          label: "CLI",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "redis/cli/index",
          },
          items: [
            {
              type: "doc",
              id: "redis/cli/key",
            },
          ],
        },
      ],
    },
    // Microsoft Azure
    {
      type: "category",
      label: "Microsoft Azure",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "microsoft-azure/index",
      },
      items: [
        {
          type: "doc",
          id: "microsoft-azure/login-azure-cn",
        },
      ],
    },
  ],
};
module.exports = sidebars;
