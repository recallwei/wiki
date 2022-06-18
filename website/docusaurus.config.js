// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const oceanicNext = require("prism-react-renderer/themes/oceanicNext");
// const duotoneLight = require("prism-react-renderer/themes/duotoneLight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: {
    githubLink: "https://github.com/recallwei/",
    primaryColor: "#25c2a0",
  },
  title: "Bruce Song",
  tagline: "信じて諦めなければ、夢は必ずかなう", // motto
  url: "https:bruce-wiki.vercel.app",
  baseUrl: "/",
  baseUrlIssueBanner: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon/favicon.png",
  organizationName: "Bruce Song", // Usually your GitHub org/username.
  projectName: "blog", // Usually your repo name.

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // 将 docs URL 作为根 URL
          //routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/recallwei/wiki/tree/main/website", // GitHub 仓库对应文件位置
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/recallwei/wiki/tree/main/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true, // 底部隐藏按钮
          autoCollapseCategories: false, // 自动折叠侧边栏
        },
      },
      navbar: {
        title: "Bruce's Wiki",
        logo: {
          alt: "Bruce's Wiki",
          src: "img/favicon/favicon.png",
        },
        items: [
          // Left
          {
            type: "doc",
            docId: "front-end",
            label: "前端",
            position: "left",
          },
          {
            type: "doc",
            docId: "back-end",
            label: "后端",
            position: "left",
          },
          {
            type: "doc",
            docId: "code-specification",
            label: "代码规范",
            position: "left",
          },
          {
            type: "doc",
            docId: "copywriting-guide",
            label: "设计",
            position: "left",
          },
          {
            type: "doc",
            docId: "software/index",
            label: "软件",
            position: "left",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "todo",
            label: "To Do",
            position: "left",
          },
          // Right
          {
            href: "https://github.com/recallwei/",
            position: "right",
            className: "header-github-link",
            title: "Go to Bruce's Github homepage.",
            "aria-label": "GitHub repository",
          },
        ],
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
      // code block 基于 prism.js
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // theme: duotoneLight,
        // darkTheme: oceanicNext,
        // Prism : https://prismjs.com/#supported-languages
        additionalLanguages: [
          "aspnet", // ASP.NET
          "cpp", // C++
          "csharp", //C#
          "graphql", //GraphQL
          "go", //Go
          "http", //HTTP
          "java", //Java
          "powershell", //PowerShell
          "swift", //Swift
          "vim", //vim
        ],
      },
      //顶部横幅
      announcementBar: {
        id: "support_us",
        content: "I am currently learning React and WeXin Mini Program...",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
      //实时代码块
      liveCodeBlock: {
        /**
         * 实时效果显示的位置，可位于编辑器上方或下方。
         * 可为："top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
    }),
};

module.exports = config;
