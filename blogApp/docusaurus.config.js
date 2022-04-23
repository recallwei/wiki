// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
            docId: "home",
            label: "Docs",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "react/download-file",
            label: "React",
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
        copyright: `Copyright © ${new Date().getFullYear()} Bruce. Built with Docusaurus.`,
      },
      // code block 基于 prism.js
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
        darkTheme: darkCodeTheme,
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
    }),
};

module.exports = config;
