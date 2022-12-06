/* eslint-disable @typescript-eslint/no-var-requires */

// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const oceanicNext = require("prism-react-renderer/themes/oceanicNext");
// const duotoneLight = require("prism-react-renderer/themes/duotoneLight");

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 自定义字段
  customFields: {
    apiBaseUrl: process.env.API_BASE_URL,
  },
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

  // 多语言配置
  i18n: {
    defaultLocale: "zh-cn",
    locales: [
      "zh-cn",
      //"en"
    ],
    localeConfigs: {
      "zh-cn": {
        label: "简体中文",
      },
    },
  },

  // 主题插件
  themes: ["@docusaurus/theme-live-codeblock"],

  // 预设
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
          sidebarPath: "./sidebars.js",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
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
          editUrl: "https://github.com/recallwei/wiki/tree/main/website",
        },
        theme: {
          customCss: require.resolve("./src/style/custom.css"),
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

  // 主题配置
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
          "docker",
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
