/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  frontend: [
    // Home
    {
      type: "doc",
      id: "front-end",
      label: "前端",
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
          type: "category",
          label: "标签",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "html/elements/index",
          },
          items: [
            {
              type: "doc",
              id: "html/elements/text",
              label: "文本",
            },
            {
              type: "doc",
              id: "html/elements/hyperlink",
              label: "超链接",
            },
            {
              type: "doc",
              id: "html/elements/img",
              label: "图片",
            },
          ],
        },
        {
          type: "doc",
          id: "html/character-entities",
          label: "字符实体",
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
          label: "UI",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "css/ui/index",
          },
          items: [
            {
              type: "doc",
              id: "css/ui/card",
              label: "Card",
            },
            {
              type: "doc",
              id: "css/ui/ribbon",
              label: "Ribbon",
            },
            {
              type: "doc",
              id: "css/ui/divider",
              label: "分隔线",
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
    // JavaScript
    {
      type: "category",
      label: "JavaScript",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "javascript/index",
      },
      items: [
        {
          type: "category",
          label: "数据类型",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "javascript/data-type/index",
          },
          items: [
            {
              type: "doc",
              id: "javascript/data-type/number",
              label: "Number",
            },
          ],
        },
        {
          type: "category",
          label: "表达式",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "javascript/expressions/index",
          },
          items: [
            {
              type: "doc",
              id: "javascript/expressions/destructuring-assignment",
              label: "解构赋值",
            },
          ],
        },
        {
          type: "category",
          label: "运算符",
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
              label: "按位非",
            },
          ],
        },
        {
          type: "category",
          label: "值类型",
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
              label: "类型转换",
            },
          ],
        },
        {
          type: "category",
          label: "引用类型",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "javascript/reference-types/index",
          },
          items: [
            {
              type: "category",
              label: "数组",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "javascript/reference-types/array/index",
              },
              items: [
                {
                  type: "doc",
                  id: "javascript/reference-types/array/method-splice",
                  label: "splice",
                },
              ],
            },
            {
              type: "doc",
              id: "javascript/reference-types/shallowcopy-and-deepcopy",
              label: "浅复制与深复制",
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
            id: "javascript/solutions/index",
          },
          items: [
            {
              type: "doc",
              id: "javascript/solutions/get-file-type",
              label: "获取文件类型",
            },
            {
              type: "doc",
              id: "javascript/solutions/get-text-from-html",
              label: "从 HTML 中提取文字",
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
          label: "Hooks",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "react/hooks/index",
          },
          items: [
            {
              type: "doc",
              id: "react/hooks/useState",
              label: "useState",
            },
            {
              type: "doc",
              id: "react/hooks/useEffect",
              label: "useEffect",
            },
          ],
        },
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
          label: "样式和 CSS",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "react/style-and-css/index",
          },
          items: [
            {
              type: "doc",
              id: "react/style-and-css/css-in-javascript",
              label: "CSS in JavaScript",
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
          label: "Markdown 特性",
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
              label: "基本特性",
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
              id: "docusaurus/markdown-feature/assets",
              label: "静态资源",
            },
            {
              type: "doc",
              id: "docusaurus/markdown-feature/mdx-components",
              label: "MDX Components",
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
          id: "docusaurus/i18n",
          label: "多语言",
        },
        {
          type: "doc",
          id: "docusaurus/rename-project-name",
          label: "项目重命名",
        },
        {
          type: "doc",
          id: "docusaurus/integrate-tailwind-css",
          label: "🚀 集成 TailwindCSS",
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
          id: "npm/classnames",
          label: "classnames",
        },
        {
          type: "doc",
          id: "npm/clsx",
          label: "clsx",
        },
        {
          type: "doc",
          id: "npm/patch-package",
          label: "patch-package",
        },
        {
          type: "doc",
          id: "npm/n-module",
          label: "n module",
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
    // GraphQL
    {
      type: "category",
      label: "GraphQL",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "graphql/index",
      },
      items: [
        {
          type: "doc",
          id: "graphql/installation",
          label: "🚀 安装",
        },
      ],
    },
  ],
  backend: [
    // Home
    {
      type: "doc",
      id: "back-end",
      label: "后端",
    },
    // C#
    {
      type: "category",
      label: "C#",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "csharp/index" },
      items: [{ type: "doc", id: "csharp/environment", label: "🚀 搭建环境" }],
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
          label: "🚀 搭建环境",
        },
      ],
    },
    // Node.js
    {
      type: "category",
      label: "Node.js",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "nodejs/index",
      },
      items: [
        {
          type: "doc",
          id: "nodejs/environment",
          label: "🚀 搭建环境",
        },
        {
          type: "category",
          label: "🚀 Express",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "nodejs/express/index",
          },
          items: [
            {
              type: "doc",
              id: "nodejs/express/installation",
              label: "🚀 安装",
            },
          ],
        },
      ],
    },
    // MongoDB
    {
      type: "category",
      label: "MongoDB",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "mongodb/index",
      },
      items: [
        {
          type: "doc",
          id: "mongodb/environment",
          label: "🚀 搭建环境",
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
          label: "🚀 CLI",
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
              label: "🚀 Key",
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
          label: "🚀 使用中国区 Azure",
        },
      ],
    },
  ],
  cs: [
    // 算法
    {
      type: "category",
      label: "算法",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "algorithm/index" },
      items: [
        {
          type: "doc",
          id: "algorithm/xor",
          label: "XOR 算法",
        },
      ],
    },
    // 操作系统
    {
      type: "category",
      label: "操作系统",
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
    // Network
    {
      type: "category",
      label: "计算机网络",
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
  ],
  software: [
    // 软件测评
    {
      type: "category",
      label: "软件测评",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "software/index" },
      items: [
        {
          type: "doc",
          id: "software/telegram",
          label: "Telegram",
        },
        {
          type: "doc",
          id: "software/clashx",
          label: "ClashX",
        },
      ],
    },
    { type: "doc", id: "vpn", label: "VPN" },
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
  ],
  design: [
    // 文案排版指南
    { type: "doc", id: "copywriting-guide", label: "文案排版指南" },
    // 优质网站设计
    { type: "doc", id: "best-website-design", label: "优质网站设计" },
    // Figma
    {
      type: "category",
      label: "Figma",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "figma/index",
      },
      items: [
        {
          type: "doc",
          id: "figma/shortcuts",
          label: "快捷键",
        },
      ],
    },
  ],
};
module.exports = sidebars;
