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
    telegramLink: "https://t.me/recallwei/",
    primaryColor: "#25c2a0",
  },
  title: "Bruce Song",
  tagline: "信じて諦めなければ、夢は必ずかなう",
  url: "https:bruce-wiki.vercel.app",
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
        docs: {
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
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
      },
      announcementBar: {
        id: "support_us",
        content: "I am currently learning React and Go...",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "Bruce's Wiki",
        logo: {
          alt: "Bruce's Wiki",
          src: "img/favicon/favicon.png",
          srcDark: "img/favicon/favicon.png",
          target: "_self",
          className: "navbarIcon",
        },
        items: [
          // Left
          {
            type: "dropdown",
            label: "前端",
            position: "left",
            items: [
              { type: "doc", label: "Home", docId: "front-end" },
              { type: "doc", label: "Markdown", docId: "markdown/index" },
              { type: "doc", label: "HTML", docId: "html/index" },
              { type: "doc", label: "CSS", docId: "css/index" },
              { type: "doc", label: "JavaScript", docId: "javascript/index" },
              { type: "doc", label: "React", docId: "react/index" },
              { type: "doc", label: "Docusaurus", docId: "docusaurus/index" },
              {
                type: "doc",
                label: "微信小程序",
                docId: "wexin-mini-program/index",
              },
              { type: "doc", label: "npm", docId: "npm/index" },
              { type: "doc", label: "GraphQL", docId: "graphql/index" },
            ],
          },
          {
            type: "dropdown",
            label: "后端",
            position: "left",
            items: [
              { type: "doc", label: "Home", docId: "back-end" },
              { type: "doc", label: "C#", docId: "csharp/index" },
              { type: "doc", label: "Go", docId: "go/index" },
              { type: "doc", label: "Node.js", docId: "nodejs/index" },
              { type: "doc", label: "MongoDB", docId: "mongodb/index" },
              { type: "doc", label: "Redis", docId: "redis/index" },
              {
                type: "doc",
                label: "Microsoft Azure",
                docId: "microsoft-azure/index",
              },
            ],
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "frontend",
            label: "前端",
          },
          {
            type: "doc",
            docId: "algorithm/index",
            label: "计算机",
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
            docId: "software/index",
            label: "软件",
            position: "left",
          },
          {
            type: "doc",
            docId: "copywriting-guide",
            label: "设计",
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
        hideOnScroll: false,
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
        // Prism : https://prismjs.com/#supported-languages
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
        appId: "YOUR_APP_ID",
        apiKey: "YOUR_SEARCH_API_KEY",
        indexName: "YOUR_INDEX_NAME",
        contextualSearch: true,
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
