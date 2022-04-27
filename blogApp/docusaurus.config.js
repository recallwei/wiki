// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const oceanicNext = require("prism-react-renderer/themes/oceanicNext");
const duotoneLight = require("prism-react-renderer/themes/duotoneLight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bruce Song",
  tagline: "Welcome!", //todo: check property
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  baseUrlIssueBanner: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/geek.png",
  organizationName: "Bruce Song", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  // TailwindCSS Support
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

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
          editUrl: "https://github.com/recallwei/blog/tree/main/blogApp", //GitHub 仓库对应文件位置
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/recallwei/blog/tree/main/blogApp",
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
      hideableSidebar: true,
      autoCollapseSidebarCategories: true, //自动折叠侧边栏
      navbar: {
        title: "Bruce's Wiki",
        logo: {
          alt: "Bruce's Wiki",
          src: "img/geek.png",
        },
        items: [
          // Left
          {
            type: "doc",
            docId: "front-end/front-end-home",
            label: "Front-end",
            position: "left",
          },
          {
            type: "doc",
            docId: "back-end/back-end-home",
            label: "Back-end",
            position: "left",
          },
          {
            type: "doc",
            docId: "cs/cs-home",
            label: "CS",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
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
        logo: { src: "img/geek.png", href: "/", width: 40, height: 40 },
        style: "light", // "light" | "dark"
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Bruce,Inc. Built with Docusaurus.`,
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
        content: "I am currently learning React and WeChat MiniProgram...",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
    }),
};

module.exports = config;
