// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const oceanicNext = require("prism-react-renderer/themes/oceanicNext");
// const duotoneLight = require("prism-react-renderer/themes/duotoneLight");

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: { apiBaseUrl: process.env.API_BASE_URL },
  title: "Bruce's Wiki",
  tagline: "信じて諦めなければ、夢は必ずかなう",
  url: "https://wiki.bruceworld.top/",
  baseUrl: "/",
  baseUrlIssueBanner: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon/favicon.png",
  organizationName: "Bruce Song",
  projectName: "wiki",

  i18n: {
    defaultLocale: "zh-CN",
    locales: [
      "zh-CN",
      //"en"
    ],
    localeConfigs: {
      "zh-CN": {
        label: "简体中文",
      },
    },
  },

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        docs: {
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/recallwei/wiki/tree/main/website",
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
        },
        blog: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/recallwei/wiki/tree/main/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
      },
      announcementBar: {
        id: "support_us",
        content:
          "I am currently learning TypeScript and building a RESTful API...",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "Bruce の Wiki",
        logo: {
          alt: "Bruce の Wiki",
          src: "img/favicon/favicon.png",
          srcDark: "img/favicon/favicon.png",
          target: "_self",
          className: "navbarIcon",
        },
        hideOnScroll: false,
        items: [
          // Left
          {
            type: "dropdown",
            label: "前端",
            position: "left",
            items: [
              { type: "doc", label: "Home", docId: "front-end" },
              {
                type: "docSidebar",
                label: "Markdown",
                sidebarId: "markdown",
              },
              { type: "docSidebar", label: "HTML", sidebarId: "html" },
              { type: "docSidebar", label: "CSS", sidebarId: "css" },
              {
                type: "docSidebar",
                label: "JavaScript",
                sidebarId: "javascript",
              },
              {
                type: "docSidebar",
                label: "TypeScript",
                sidebarId: "typescript",
              },
              { type: "docSidebar", label: "React", sidebarId: "react" },
              {
                type: "docSidebar",
                label: "Docusaurus",
                sidebarId: "docusaurus",
              },
              {
                type: "docSidebar",
                label: "微信小程序",
                sidebarId: "wexin_mini_program",
              },
              { type: "docSidebar", label: "npm", sidebarId: "npm" },
              { type: "docSidebar", label: "Yarn", sidebarId: "yarn" },
              { type: "docSidebar", label: "Vite", sidebarId: "vite" },
              { type: "docSidebar", label: "GraphQL", sidebarId: "graphql" },
            ],
          },
          {
            type: "dropdown",
            label: "后端",
            position: "left",
            items: [
              { type: "doc", label: "Home", docId: "back-end" },
              { type: "docSidebar", label: "C#", sidebarId: "csharp" },
              { type: "docSidebar", label: "Go", sidebarId: "go" },
              { type: "docSidebar", label: "Node.js", sidebarId: "nodejs" },
              {
                type: "docSidebar",
                label: "PostgreSQL",
                sidebarId: "postgresql",
              },
              {
                type: "docSidebar",
                label: "Microsoft SQL Server",
                sidebarId: "microsoft_sqlserver",
              },
              { type: "docSidebar", label: "MongoDB", sidebarId: "mongodb" },
              { type: "docSidebar", label: "CosmosDB", sidebarId: "cosmosdb" },
              { type: "docSidebar", label: "Redis", sidebarId: "redis" },
              {
                type: "docSidebar",
                label: "Vercel",
                sidebarId: "vercel",
              },
              {
                type: "docSidebar",
                label: "Microsoft Azure",
                sidebarId: "microsoft_azure",
              },
            ],
          },
          {
            type: "dropdown",
            label: "计算机",
            position: "left",
            items: [
              { type: "docSidebar", label: "算法", sidebarId: "algorithm" },
              {
                type: "docSidebar",
                label: "操作系统",
                sidebarId: "operating_system",
              },
              {
                type: "docSidebar",
                label: "计算机网络",
                sidebarId: "computer_network",
              },
            ],
          },
          {
            type: "dropdown",
            label: "其他",
            position: "left",
            items: [
              { type: "docSidebar", label: "Git", sidebarId: "git" },
              {
                type: "docSidebar",
                label: "YAML",
                sidebarId: "yaml",
              },
              {
                type: "docSidebar",
                label: "PowerShell",
                sidebarId: "powershell",
              },
            ],
          },
          {
            type: "doc",
            docId: "code-specification",
            label: "🐞 代码规范",
            position: "left",
          },
          {
            type: "doc",
            docId: "software/index",
            label: "📱 软件",
            position: "left",
          },
          {
            type: "doc",
            docId: "copywriting-guide",
            label: "✏️ 设计",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "todo",
            label: "⏳ To Do",
            position: "left",
          },
          {
            type: "doc",
            docId: "note",
            label: "📒 笔记",
            position: "left",
          },
          {
            to: "/docs/tags",
            label: "🏷️ 标签",
            position: "left",
          },
          {
            to: "/search",
            label: "🔍 搜索",
            position: "left",
          },
          // Right
          // { type: "localeDropdown", position: "right" },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/recallwei/",
            position: "right",
            className: "header-github-link",
            title: "前往 Bruce 的 GitHub 主页",
            "aria-label": "GitHub repository",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      footer: {
        logo: {
          src: "img/favicon/favicon.png",
          href: "/",
          width: 40,
          height: 40,
          alt: "bruce",
        },
        style: "light", // "light" | "dark"
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Bruce. Built with Docusaurus. Hosted by Vercel.`,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // theme: duotoneLight,
        // darkTheme: oceanicNext,
        // Prism: https://prismjs.com/#supported-languages
        // Docusaurus Support: https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
        additionalLanguages: [
          "aspnet",
          "cpp",
          "csharp",
          "graphql",
          "go",
          "http",
          "java",
          "powershell",
          "swift",
          "vim",
        ],
      },
      algolia: {
        appId: "2MFWID6114",
        apiKey: "73035bd8b4198d6a191e424ced0b641b",
        indexName: "bruce-wiki",
        contextualSearch: false,
        externalUrlRegex: "external\\.com|domain\\.com",
        searchParameters: {},
        searchPagePath: "search",
      },
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
    }),
};

module.exports = config;
