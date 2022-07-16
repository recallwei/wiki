// Frontend
const FRONTEND: string = "前端";
const MARKDOWN: string = "Markdown";
const HTML: string = "HTML";
const CSS: string = "CSS";
const JAVASCRIPT: string = "JavaScript";
const TYPESCRIPT: string = "TypeScript";
const REACT: string = "React";
const DOCUSAURUS: string = "Docusaurus";
const WEXIN_MINIPROGRAM: string = "微信小程序";
const NPM: string = "npm";
const GRAPHQL: string = "GraphQL";

// Backend
const BACKEND: string = "后端";
const CSHARP: string = "C#";
const GO: string = "Go";
const NODE_JS: string = "Node.js";
const MICROSOFT_SQL_SERVER: string = "Microsoft SQL Server";
const MONGODB: string = "MongoDB";
const REDIS: string = "Redis";
const MICROSOFT_AZURE: string = "Microsoft Azure";

const ALGORITHM: string = "算法";
const OPERATING_SYSTEM: string = "操作系统";
const COMPUTER_NETWORK: string = "计算机网络";

const JSON: string = "JSON";
const YAML: string = "YAML";

const SOFTWARE_TESTING: string = "软件测评";
const INTEGRATED_DEVELOPMENT_ENVIRONMENT: string = "IDE";

const COPYWRITING_GUIDE: string = "文案排版指南";
const BEST_WEBSITE_DESIGN: string = "优质网站设计";
const FIGMA: string = "Figma";

// Contact me
const GITHUB: string = "GitHub";
const TELEGRAM: string = "Telegram";
const GMAIL: string = "GMail";
const TWITTER: string = "Twitter";
const WECHAT: string = "微信";
const ZHIHU: string = "知乎";
const GITHUB_LINK: string = "https://github.com/recallwei/";
const TELEGRAM_LINK: string = "https://t.me/recallwei/";
const GMAIL_ADDRESS: string = "recall4056@gmail.com";

interface FrontendMenuData {
  readonly frontend: string;
  readonly markdown: string;
  readonly html: string;
  readonly css: string;
  readonly javascript: string;
  readonly typescript: string;
  readonly react: string;
  readonly docusaurus: string;
  readonly wexinMiniprogram: string;
  readonly npm: string;
  readonly graphql: string;
}

interface BackendMenuData {
  readonly backend: string;
  readonly csharp: string;
  readonly go: string;
  readonly nodejs: string;
  readonly sqlserver: string;
  readonly mongodb: string;
  readonly redis: string;
  readonly azure: string;
}

interface ContactMeData {
  readonly github: string;
  readonly telegram: string;
  readonly gmail: string;
  readonly twitter: string;
  readonly wechat: string;
  readonly zhihu: string;
  readonly githubLink: string;
  readonly telegramLink: string;
  readonly gmailAddress: string;
}

export const frontendMenuData: FrontendMenuData = {
  frontend: FRONTEND,
  markdown: MARKDOWN,
  html: HTML,
  css: CSS,
  javascript: JAVASCRIPT,
  typescript: TYPESCRIPT,
  react: REACT,
  docusaurus: DOCUSAURUS,
  wexinMiniprogram: WEXIN_MINIPROGRAM,
  npm: NPM,
  graphql: GRAPHQL,
};

export const backendMenuData: BackendMenuData = {
  backend: BACKEND,
  csharp: CSHARP,
  go: GO,
  nodejs: NODE_JS,
  sqlserver: MICROSOFT_SQL_SERVER,
  mongodb: MONGODB,
  redis: REDIS,
  azure: MICROSOFT_AZURE,
};

export const contactMeData: ContactMeData = {
  github: GITHUB,
  telegram: TELEGRAM,
  gmail: GMAIL,
  twitter: TWITTER,
  wechat: WECHAT,
  zhihu: ZHIHU,
  githubLink: GITHUB_LINK,
  telegramLink: TELEGRAM_LINK,
  gmailAddress: GMAIL_ADDRESS,
};
