/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  markdown: [
    doc("markdown/index", "Markdown"),
    doc("markdown/embed-html", "嵌入 HTML"),
    doc("markdown/headings", "标题"),
    doc("markdown/paragraphs", "段落"),
    doc("markdown/line-breaks", "🚀 换行符"),
  ],

  html: [
    doc("html/index", "HTML"),
    category("html/elements/index", "标签", [
      doc("html/elements/text", "文本"),
      doc("html/elements/hyperlink", "超链接"),
      doc("html/elements/img", "图片"),
    ]),
    doc("html/character-entities", "字符实体"),
    category("html/solutions/index", "解决方案", [
      doc("html/solutions/autocomplete", "禁用浏览器的自动补全"),
    ]),
  ],

  css: [doc("css/index", "CSS")],

  javascript: [
    doc("javascript/index", "JavaScript"),
    category("javascript/data-type/index", "数据类型", [
      doc("javascript/data-type/number", "Number"),
      doc("javascript/data-type/string", "🚀 String"),
      doc("javascript/data-type/type-conversion", "🚀 类型转换"),
    ]),
    category("javascript/operators-and-expressions/index", "运算符和表达式", [
      doc("javascript/operators-and-expressions/bitwise-not", "按位非 ~"),
      doc("javascript/operators-and-expressions/logic-or", "逻辑或 ||"),
      doc(
        "javascript/operators-and-expressions/nullish-coalescing",
        "空值合并 ??"
      ),
      doc("javascript/operators-and-expressions/option-chaining", "可选链 ?."),
      doc(
        "javascript/operators-and-expressions/destructuring-assignment",
        "解构赋值"
      ),
    ]),
    category("javascript/reference-types/index", "引用类型", [
      category("javascript/reference-types/array/index", "数组", [
        doc("javascript/reference-types/array/splice", "splice"),
      ]),
      doc(
        "javascript/reference-types/shallowcopy-and-deepcopy",
        "🚀 深复制与浅复制"
      ),
    ]),
    category("javascript/solutions/index", "解决方案", [
      doc("javascript/solutions/get-device-type", "获取设备类型"),
      doc("javascript/solutions/get-file-type", "获取文件类型"),
      doc("javascript/solutions/get-text-from-html", "从 HTML 中提取文字"),
      doc("javascript/solutions/possessing-date", "日期、时间处理"),
      doc("javascript/solutions/get-url-parameter", "获取 URL Query 参数"),
      doc("javascript/solutions/copy-text-to-clipboard", "复制文本至剪切板"),
      doc("javascript/solutions/generate-a-guid", "生成 GUID"),
    ]),
  ],

  typescript: [
    doc("typescript/index", "TypeScript"),
    doc("typescript/environment", "搭建环境"),
    doc("typescript/debug", "运行与调试"),
    category("typescript/types/index", "类型", [
      doc("typescript/types/built-in", "内置类型"),
      doc("typescript/types/any", "any"),
      doc("typescript/types/enum", "enum"),
      doc("typescript/types/tuple", "Tuple"),
      doc("typescript/types/array", "Array"),
      doc("typescript/types/object", "Object"),
      doc("typescript/types/function", "Function"),
      doc("typescript/types/type-alias", "类型别名"),
      doc("typescript/types/union-type", "联合类型"),
      doc("typescript/types/intersection-type", "交叉类型"),
      doc("typescript/types/literal-type", "字面量类型"),
      doc("typescript/types/nullable-type", "可空类型"),
    ]),
    doc("typescript/tsconfig", "TSConfig"),
  ],

  react: [
    doc("react/index", "React"),
    category("react/hooks/index", "Hooks", [
      doc("react/hooks/useState", "useState"),
      doc("react/hooks/useEffect", "useEffect"),
      doc("react/hooks/useEffect", "useRef"),
      doc("react/hooks/useEffect", "useContext"),
    ]),
    category("react/dom/index", "DOM", [
      doc("react/dom/dom-elements", "DOM 元素"),
    ]),
    category("react/style-and-css/index", "样式和 CSS", [
      doc("react/style-and-css/css-in-javascript", "CSS in JavaScript"),
    ]),
    doc("react/components-interaction", "组件交互"),
    category("react/solutions/index", "解决方案", [
      doc("react/solutions/download-file", "文件下载"),
      doc("react/solutions/import-image", "图片导入"),
    ]),
    category("react/best-practice/index", "最佳实践", [
      doc("react/best-practice/component-design", "组件设计"),
    ]),
    category("react/create-react-app/index", "Create React App", [
      doc("react/create-react-app/configure-absolute-path", "配置绝对路径"),
    ]),
    category("react/react-router/index", "React Router", [
      doc("react/react-router/installation", "安装 React Router"),
      category("react/react-router/components/index", "组件", [
        doc("react/react-router/components/link", "🚀 Link"),
      ]),
    ]),
    category("react/redux/index", "Redux", [
      doc("react/redux/installation", "安装 Redux"),
    ]),
    category("react/use-typescript/index", "使用 TypeScript", [
      doc("react/use-typescript/types-in-react", "React 中的类型"),
    ]),
  ],

  docusaurus: [doc("docusaurus/index", "Docusaurus")],

  wexin_mini_program: [doc("wexin-mini-program/index", "微信小程序")],

  npm: [
    doc("npm/index", "npm"),
    doc("npm/upgrade-node", "升级 Node 版本"),
    doc("npm/upgrade-npm", "升级 npm 版本"),
    doc("npm/classnames", "classnames"),
    doc("npm/clsx", "clsx"),
    doc("npm/dotenv", "dotenv"),
    doc("npm/momentjs", "Moment.js"),
    doc("npm/n-module", "N Module"),
    doc("npm/nodemon", "nodemon"),
    doc("npm/patch-package", "patch-package"),
    doc("npm/ts-node", "ts-node"),
    doc("npm/uuid", "uuid"),
  ],

  yarn: [doc("yarn/index", "Yarn"), doc("yarn/cli", "CLI")],

  vite: [doc("vite/index", "Vite"), doc("vite/installation", "项目搭建")],

  graphql: [
    doc("graphql/index", "GraphQL"),
    doc("graphql/installation", "🚀 安装"),
  ],

  csharp: [
    doc("csharp/index", "C#"),
    doc("csharp/environment", "🚀 搭建环境"),
    category("csharp/string/index", "String", [
      doc("csharp/string/substring", "Substring"),
    ]),
    doc("csharp/guid", "GUID"),
  ],

  go: [doc("go/index", "Go")],

  nodejs: [
    doc("nodejs/index", "Node.js"),
    doc("nodejs/environment", "🚀 搭建环境"),
    doc("nodejs/environment-variable", "环境变量"),
    category("nodejs/express/index", "Express", [
      doc("nodejs/express/installation", "安装"),
    ]),
    category("nodejs/prisma/index", "Prisma", [
      category("nodejs/prisma/prisma-client/index", "Prisma Client", [
        doc("nodejs/prisma/prisma-client/crud", "CRUD"),
        doc("nodejs/prisma/prisma-client/middleware", "中间件"),
      ]),
      doc("nodejs/prisma/database-connection-management", "数据库连接管理"),
    ]),
  ],

  postgresql: [
    doc("postgresql/index", "PostgreSQL"),
    doc("postgresql/connection", "连接数据库"),
  ],

  microsoft_sqlserver: [
    doc("microsoft-sqlserver/index", "Microsoft SQL Server"),
    doc("microsoft-sqlserver/guid", "GUID"),
  ],

  mongodb: [doc("mongodb/index", "MongoDB")],

  redis: [doc("redis/index", "Redis")],

  microsoft_azure: [
    doc("microsoft-azure/index", "Microsoft Azure"),
    doc("microsoft-azure/login-azure-cn", "🚀使用中国区 Azure"),
  ],

  git: [
    doc("git/index", "Git"),
    doc("git/gitignore-not-working", ".gitignore 不工作"),
  ],

  yaml: [
    doc("yaml/index", "YAML"),
    doc("yaml/scalars", "纯量"),
    doc("yaml/array", "数组"),
    doc("yaml/object", "对象"),
    doc("yaml/composite-structure", "复合结构"),
  ],

  powershell: [
    doc("powershell/index", "PowerShell"),
    doc("powershell/execution-policy", "ExecutionPolicy"),
  ],

  algorithm: [doc("algorithm/index", "算法")],

  operating_system: [doc("operating-system/index", "操作系统")],

  computer_network: [doc("computer-network/index", "计算机网络")],

  frontend: [
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
          label: "字体",
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
              label: "导入",
            },
            {
              type: "doc",
              id: "css/font/display",
              label: "显示",
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
          label: "属性",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "css/properties/index",
          },
          items: [
            {
              type: "doc",
              id: "css/properties/box-shadow",
              label: "box-shadow",
            },
            {
              type: "doc",
              id: "css/properties/white-space",
              label: "white-space",
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
          label: "解决方案",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "css/solutions/index",
          },
          items: [
            {
              type: "doc",
              id: "css/solutions/code-change-design",
              label: "代码变更效果",
            },
            {
              type: "doc",
              id: "css/solutions/svg",
              label: "修改 SVG 样式",
            },
            {
              type: "doc",
              id: "css/solutions/bootstrap",
              label: "Bootstrap",
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
    // 微信小程序
    {
      type: "category",
      label: "微信小程序",
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
          label: "配置文件",
        },
        {
          type: "doc",
          id: "wexin-mini-program/custom-components",
          label: "自定义组件",
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
          label: "解决方案",
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
        {
          type: "category",
          label: "第三方组件",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "wexin-mini-program/third-party-components/index",
          },
          items: [
            {
              type: "doc",
              id: "wexin-mini-program/third-party-components/mp-html",
              label: "mp-html",
            },
          ],
        },
        {
          type: "category",
          label: "运维",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "wexin-mini-program/operation-and-maintenance/index",
          },
          items: [
            {
              type: "doc",
              id: "wexin-mini-program/operation-and-maintenance/security-detection",
              label: "审核的安全检测",
            },
          ],
        },
      ],
    },
  ],
  backend: [
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
          label: "搭建环境",
        },
        {
          type: "doc",
          id: "go/modules",
          label: "🚀 模块",
        },
        {
          type: "doc",
          id: "go/code-specification",
          label: "代码规范",
        },
        {
          type: "category",
          label: "数据类型",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "go/data-type/index",
          },
          items: [
            {
              type: "doc",
              id: "go/data-type/number",
              label: "Number",
            },
            {
              type: "doc",
              id: "go/data-type/boolean",
              label: "Boolean",
            },
            {
              type: "doc",
              id: "go/data-type/string",
              label: "String",
            },
            {
              type: "doc",
              id: "go/data-type/type-conversion",
              label: "类型转换",
            },
          ],
        },
        {
          type: "category",
          label: "🚀 函数",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "go/functions/index",
          },
          items: [],
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
        id: "operating-system/index",
      },
      items: [
        {
          type: "category",
          label: "macOS",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "operating-system/mac-os/index",
          },
          items: [
            {
              type: "doc",
              id: "operating-system/mac-os/shortcuts",
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
            id: "operating-system/windows/index",
          },
          items: [
            {
              type: "doc",
              id: "operating-system/windows/expose-iis-in-lan",
              label: "将 IIS 暴露在局域网内",
            },
          ],
        },
      ],
    },
    // 计算机网络
    {
      type: "category",
      label: "计算机网络",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "computer-network/index",
      },
      items: [
        {
          type: "category",
          label: "DNS",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "computer-network/dns/index",
          },
          items: [
            {
              type: "doc",
              id: "computer-network/dns/flush-cache",
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
    { type: "doc", id: "build-website", label: "建站" },
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

function doc(id, label) {
  return {
    type: "doc",
    id: id,
    label: label,
  };
}

function category(id, label, items) {
  return {
    type: "category",
    label: label,
    collapsible: true,
    collapsed: true,
    link: {
      type: "doc",
      id: id,
    },
    items: items,
  };
}

module.exports = sidebars;
